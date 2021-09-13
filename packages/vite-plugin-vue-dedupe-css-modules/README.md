# @frsource/vite-plugin-vue-dedupe-css-modules

[![npm](https://img.shields.io/npm/v/@frsource/vite-plugin-vue-dedupe-css-modules)](https://www.npmjs.com/package/@frsource/vite-plugin-vue-dedupe-css-modules)
[![GitHub license](https://img.shields.io/github/license/FRSOURCE/vite-plugin-vue-dedupe-css-modules)](https://github.com/FRSOURCE/vite-plugin-vue-dedupe-css-modules/blob/master/LICENSE)

By default, `@vitejs/plugin-vue` version 2 adds a CSS Module into the output JS bundle every time it's used in your component via [`<style module lang="scss" src="somemodule.scss"></style>` syntax](https://vuejs.org/api/sfc-css-features.html#css-modules). This plugin for vite deduplicates CSS Modules in your Vue application bundle leaving them only once! 🚀

## Install

```bash
npm install @frsource/vite-plugin-vue-dedupe-css-modules --save-dev
# or
yarn add @frsource/vite-plugin-vue-dedupe-css-modules --dev
```

## Usage

```js
import { defineConfig } from 'vite';
import vueDedupeCSSModulesPlugin from '@frsource/vite-plugin-vue-dedupe-css-modules';

export default defineConfig({
  plugins: [vueDedupeCSSModulesPlugin({ /** Options */ })],
});
```

## Options

This plugin can be configured using the configuration options below:

### `include`

- Type: `string | string[]`
- Default: `['src/**/*.css', 'src/**/*.less', 'src/**/*.styl', 'src/**/*.scss', 'src/**/*.sass', 'src/**/*.vue']`

A single file, or array of files, to include when linting.

### `exclude`

- Type: `string | string[]`
- Default: `'node_modules'`

A single file, or array of files, to exclude when linting.

## Development

This project is using yarn version 3. Make sure to use [`yarn set version latest` to download it](https://yarnpkg.com/getting-started/install) before doing any changes.

## License

MIT
