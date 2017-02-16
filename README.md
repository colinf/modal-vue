# modal-vue

> A modal dialog component for Vue.js 2.x

![Example image](http://cfshare.s3-eu-west-1.amazonaws.com/2017-02-15_16-19-04.png)

## installation

```bash
npm install --save modal-vue
```

Then, within the `<script>` tag of the component in which you want to use the `modal-vue` component you need to import it and register it as a component.

```js
import Modal from 'modal-vue'
export default {
  components: { Modal },
  ...rest of component properties
}
```

Refer to [the vuejs documentation page](https://vuejs.org/v2/guide/components.html) for full details of using components.

## usage

Let's start with a quick example extracted from the `<template>` tag of a component which uses modal-vue.

```vue
<modal :showModal="showSourceDialog" :closeAction="closeSourceDialog">
  <h1 slot="header">Select Source</h1>
  <select slot="body" :value="database.source" @change="changeSource($event.target.value)">
    <option v-for="source in ['', ...refdata.sources]">{{ source }}</option>
  </select>
</modal>
```

## dependencies

This component uses Bootstrap v3 for CSS. If you are not already using Bootstrap, you can find [installation instructions here](http://getbootstrap.com/getting-started/).

## credits

This component was originally based on Kris Jenkin's excellent [Elm Dialog](https://github.com/krisajenkins/elm-dialog) library.