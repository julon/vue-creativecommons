# vue-creativecommons

[![Build Status](https://travis-ci.org/julon/vue-creativecommons.svg?branch=master)](https://travis-ci.org/julon/vue-creativecommons)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> CreativeCommons.org Vue.js components library.

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).

## Installation
```
npm install vue-creativecommons
```
vue-creativecommons can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, vue-creativecommons will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { HelloWorld } from 'vue-creativecommons';

export default {
  ...
  components: {
    HelloWorld
  },
  ...
};

//
// or register the whole module with vue
//
import ModuleLibrary from 'vue-creativecommons';

// Install this library
Vue.use(ModuleLibrary);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var ModuleLibrary = require('vue-creativecommons');

var YourComponent = Vue.extend({
  ...
  components: {
    'hello-world': ModuleLibrary.HelloWorld
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var ModuleLibrary = require('vue-creativecommons');

// Install this library
Vue.use(ModuleLibrary);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-creativecommons/dist/vue-creativecommons.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<hello-world></hello-world>
```

## Changelog

See the GitHub [release history](https://github.com/julon/vue-creativecommons/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
