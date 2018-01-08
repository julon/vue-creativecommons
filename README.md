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
import { CreativeCommonsIcon, CreativeCommonsLabel } from 'vue-creativecommons';

export default {
  ...
  components: {
    CreativeCommonsIcon,
    CreativeCommonsLabel
  },
  ...
};

//
// or register the whole module with vue
//
import vueCreativeCommons from 'vue-creativecommons';

// Install this library
Vue.use(vueCreativeCommons);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var vueCreativeCommons = require('vue-creativecommons');

var YourComponent = Vue.extend({
  ...
  components: {
    'cc-icon': vueCreativeCommons.CreativeCommonsIcon,
    'cc-label': vueCreativeCommons.CreativeCommonsLabel
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var vueCreativeCommons = require('vue-creativecommons');

// Install this library
Vue.use(vueCreativeCommons);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-creativecommons/dist/vue-creativecommons.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<cc-icon></cc-icon>
```

## Changelog

See the GitHub [release history](https://github.com/julon/vue-creativecommons/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
