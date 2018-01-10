# vue-creativecommons

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^22.0.4-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^3.3.3-ff70a3.svg)
![Commitizen](https://img.shields.io/badge/Commitizen-enabled-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Npm badge](https://img.shields.io/npm/v/vue-creativecommons.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.org/julon/vue-creativecommons.svg?branch=master)](https://travis-ci.org/julon/vue-creativecommons)
[![Coverage Status](https://coveralls.io/repos/github/julon/vue-creativecommons/badge.svg?branch=master)](https://coveralls.io/github/julon/vue-creativecommons?branch=master)

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

## Usage

### Icon component

#### Example

```html
<!-- normal icon -->
<cc-icon allow-adaptations="yes" allow-commercial-use="yes" icon-size="normal"></cc-icon>

<!-- compact icon -->
<cc-icon allow-adaptations="yes" allow-commercial-use="yes" icon-size="compact"></cc-icon>
```

> ![alt text](https://i.creativecommons.org/l/by/4.0/88x31.png "Creative Commons Attribution 4.0 International License")
![alt text](https://i.creativecommons.org/l/by/4.0/80x15.png "Creative Commons Attribution 4.0 International License")

#### Props
- allowAdaptations(required) - Allow adaptations of your work to be shared? `yes`, `no` or `share-alike`
- allowCommercialUse(required) - Allow commercial uses of your work? `yes` or `no`
- iconSize(required) : `compact` or `normal`

### Label component

#### Example
```html
<cc-label allow-adaptations="yes" allow-commercial-use="yes"></cc-label>
```
> This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

#### Props
- allowAdaptations(required) - Allow adaptations of your work to be shared? `yes`, `no` or `share-alike`
- allowCommercialUse(required) - Allow commercial uses of your work? `yes` or `no`

## Changelog

See the GitHub [release history](https://github.com/julon/vue-creativecommons/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
