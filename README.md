# modal-vue

> A modal dialog component for Vue.js 2.x

![Example image](http://cfshare.s3-eu-west-1.amazonaws.com/2017-02-15_16-19-04.png)

Skip to the [demo section](#demo) below if you want to see a quick working example.

## installation

```bash
npm install --save modal-vue
```

Then, within the `<script>` tag of the component in which you want to use the `modal-vue` component you need to import it, and register it as a component.

```js
import Modal from 'modal-vue'
export default {
  components: { Modal },
  ...rest of component properties
}
```

Refer to [the vuejs documentation page](https://vuejs.org/v2/guide/components.html) for full details of using components.

## usage

Let's start with a quick example extracted from the `<template>` tag of a component that uses modal-vue. Maybe that's all you need! but see below for full details of all options.

```vue
<modal :showModal="showSourceDialog" :closeAction="closeSourceDialog">
  <h1 slot="header">Select Source</h1>
  <select slot="body" :value="database.source" @change="changeSource($event.target.value)">
    <option v-for="source in ['', ...refdata.sources]">{{ source }}</option>
  </select>
</modal>
```

### properties

modal-vue accepts 3 props which are passed to it as attributes in the `<modal>` element:

- [showModal](#showmodal) (Boolean)
- [closeAction](#closeaction) (Function)
- [containerClass](#containerclass) (String)
- [closeOnOverlayClick](#closeonoverlayclick) (Boolean)

#### showModal
If true, the modal dialog will be displayed. Pass in whatever state in your application controls this.

#### closeAction
This is the function to called when the close button of the modal dialog is clicked. This can do whatever you need it to, but don't forget to change the state which controls the showModal prop or you will have a dialog for life.

#### containerClass
This is optional and specifies a Bootstrap container class to be used for the `<div>` that wraps the modal dialog if required.

#### closeOnOverlayClick
If true, the `closeAction` will also be fired when the overlay is clicked.

### slots

modal-vue has 3 html slots which are defined as child elements of the `<modal>` element:

- [header](#header)
- [body](#body)
- [footer](#footer)

#### header
This is optional and the contents of it will be used for the heading of the modal dialog. A close button will also be displayed in the header.

If both no header slot and no closeAction prop are defined a dialog without a close button will be displayed. Hopefully in this case you will have provided some other mechanism in the body or footer to allow the dialog to be closed.

#### body
This defines the contents of the body of the modal dialog. In the example at the start of this section, the body consists of an html select dropdown including an onChange handler. In this example when the onChange handler is fired the dialog is closed, so no need for any footer buttons etc.

#### footer
This defines the contents of the body of the modal dialog. Often it might be used for such things as Ok / Cancel buttons.

## dependencies

This component uses Bootstrap v3 for CSS. If you are not already using Bootstrap, you can find [installation instructions here](http://getbootstrap.com/getting-started/).

## demo
You can see a demo of modal-vue here:

[https://colinf.github.io/modal-vue/index.html](https://colinf.github.io/modal-vue/index.html)

If you want to play around with the demo, then follow these steps to get it running locally:

```bash
git clone https://github.com/colinf/modal-vue.git
cd modal-vue
npm install
npm run demo
```

and then go to [http://localhost:8000](http://localhost:8000) to access it

## credits

This component was originally based on Kris Jenkin's excellent [Elm Dialog](https://github.com/krisajenkins/elm-dialog) library.