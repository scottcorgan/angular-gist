angular-gist
============

AngularJS directive for embedding Github gists.

## Demo
Please have a look at the demo for example usage. [demo](http://htmlpreview.github.io/?https://raw.githubusercontent.com/AWolf81/angular-gist/demo-app/examples/simple-demo/index.html)

## Install

Bower

```
bower install angular-gist --save
```

NPM

```
npm install angular-gist --save
```

## Usage

Inject module

```js
angular.module('myApp', ['gist']);
```

Use as directive

```html
<gist id="1234556"></gist>
```

## Options

` id ` - Gist ID
