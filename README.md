# CI-research
[![Build Status](https://travis-ci.org/matthewdking/CI-research.svg?branch=master)](https://travis-ci.org/matthewdking/CI-research)

Continuous integration research afternoon

## What is CI?
+ development practice that requires developers to integrate code to a shared repository several times a day. Each check in is then verified by an automated build which allows teams to detect problems earlier.
+ by integrating regularly you can detect errors quickly and locate them easily

![](https://s-media-cache-ak0.pinimg.com/originals/05/c2/a7/05c2a7845cb6b4f15dfb380e0d3eae41.jpg)

### Pros
+ early detection of errors
+ cheaper, shorter periods between integrations
+ spend less time debugging
+ stop waiting to find out if your code’s going to work

### Cons
+ frequent commits
+ hard to divide into tiny chunks
+ hard to write tests
+ if project is already ongoing difficult to implement CI

## Travis
+ every time you commit and push to github travis will run the test script automatically

### How to use
+ must have node.js installed locally
+ sign up using github
+ authorise application
+ turn on the repository you want travis to build
+ create project files `.travis.yml` with:
```
language: node_js
node_js: 8.2.1
```
+ run `npm init` to create package.json
+ specify test script eg
```
"scripts": {
  "test": "istanbul cover tape test.js | tap-spec"
}
```

### Example case

#### Failing tests
This is the output you can expect from a failing test.

![travis failing test on travis site](https://user-images.githubusercontent.com/25408167/28780129-5497c734-760e-11e7-8072-6e4769c48d63.png)

Failing travis tests on github.

![travis failing test](https://user-images.githubusercontent.com/25408167/28780138-5d318218-760e-11e7-8ce0-3596735d678a.png)

#### Solved the failing tests
This is the output you can expect when all the tests pass.

![travis passing tests](https://user-images.githubusercontent.com/25408167/28780150-689a0fc6-760e-11e7-9ad7-1f7f54a3a6ca.png)

Passing tests on github.

![travis passing tests on github](https://user-images.githubusercontent.com/25408167/28780158-700fb800-760e-11e7-9545-ebd097a5d438.png)


## and if all your tests fail...
#

![stefano meme](https://user-images.githubusercontent.com/25408167/28780478-8317b0be-760f-11e7-9b5a-3e41e0a300c0.jpg)
