const test = require(`tape`);
const shot = require(`shot`);
const router = require(`./router`);


test (`Initialise`, (t) => {
  let num = 2
  t.equal(num, 2, `Should return 2`);
  t.end();
})


test (`Home route`, (t) => {
  shot.inject(router, {method: `GET`, url: `/`}, (response) => {
    t.equal(response.statusCode,  200, `Should respond with a status code of 200`);
    t.equal(response.payload, `Hello`, `Should Return "Hello" in the payload`);
    t.end();
  })
})

test(`Unknown URL`, (t) => {
  shot.inject(router, {method: `GET`, url: `/elephant`}, (response) => {
    t.equal(response.statusCode, 404, `Should return with a status code of 404`);
    t.equal(response.payload, `UnknownURI`, `Should return "UnknownURI" in the payload`);
    t.end()
  })
})

test(`Blog Routes`, (t) => {
  shot.inject(router, {method: `GET`, url: `/blog`}, (response) => {
    t.equal(response.statusCode, 200, `Should return with a status code of 200`);
    const someObj = JSON.parse(response.payload);
    t.equal(someObj.length, 3, `Should return length of 3`);
    t.equal(typeof someObj[0], `string`, `Should return as a string`);
    t.equal(typeof someObj[1], `string`, `Should return as a string`);
    t.equal(typeof someObj[2], `string`, `Should return as a string`);
    t.equal(typeof someObj, `object`, `Should return as an object`);
    t.equal(someObj[0], `string1`, `Should return "string1"`);
    t.equal(someObj[1], `string2`, `Should return "string2"`);
    t.equal(someObj[2], `string3`, `Should return "string3"`);
    t.end()
  })
})

test(`Blog Posts`, (t) => {
  shot.inject(router, {method: `POST`, url: `/blog`, headers: {password: "potato"}, payload: "string4"}, (response) => {
    t.equal(response.statusCode, 200, `Should return with a status code of 200`);
    t.equal(response.payload, "string4", `Should return with "string4"`);
    t.end()
  })
})


test(`Blog Posts NO passwords`, (t) => {
  shot.inject(router, {method: `POST`, url: `/blog`}, (response) => {
    t.equal(response.statusCode, 403, `Should return with a status code of 403`);
    t.equal(response.payload, "Forbidden", `Should return with "Forbidden"`);
    t.end()
  })
})

test(`Blog Posts NO payload`, (t) => {
  shot.inject(router, {method: `POST`, url: `/blog`, headers: {password: "potato"}}, (response) => {
    t.equal(response.statusCode, 302, `Should return with a status code of 302`);
    t.end()
  })
})
