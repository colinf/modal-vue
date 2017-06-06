<template>
  <modal :showModal="showModal" :closeAction="closeAction" :closeOnOverlayClick="true">
    <h1 slot="header">Overlay Dialog</h1>
    <span slot="body">
      Hello <strong>overlay!</strong><br />
      Click the overlay to close me!
    </span>
  </modal>
</template>

<script>
  import Modal from 'modal-vue'
  export default {
    props: ['showModal', 'closeAction'],
    components: { Modal }
  }
</script>

<style scoped>

</style>