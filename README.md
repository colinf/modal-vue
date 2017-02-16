# modal-vue

> A modal dialog component for Vue.js 2.x

![Example image](http://cfshare.s3-eu-west-1.amazonaws.com/2017-02-15_16-19-04.png)

## installation

``` bash
npm install --save modal-vue
```

Then, within the `<script>` tag of the component in which you want to use the `modal-vue` component you need to import it and register it as a component.

``` js
import Modal from 'modal-vue'
export default {
  components: { Modal },
  ...rest of component properties
}
```

## usage

You can the use the component in the normal vuejs way by either globally or locally registering it. See [this vuejs documentation page](https://vuejs.org/v2/guide/components.html) for full details.

You can also refer to the examples included in this repository to see how to register the component globally or locally.

## dependencies

This component uses Bootstrap v3 for CSS. If you are not already using Bootstrap, you can find [installation instructions here](http://getbootstrap.com/getting-started/).

## credits

This component was originally based on Kris Jenkin's excellent [Elm Dialog](https://github.com/krisajenkins/elm-dialog) library.