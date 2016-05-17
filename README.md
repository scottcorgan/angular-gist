angular-gist
============

AngularJS directive for embedding Github gists.

## Demo
Please have a look at the [demo](http://htmlpreview.github.io/?https://github.com/scottcorgan/angular-gist/blob/master/examples/simple-demo/index.html) for a live example.

It embeds this [public gist](https://gist.github.com/AWolf81/e65d546c16acb1a10c3f5e1f673c5223). 

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
