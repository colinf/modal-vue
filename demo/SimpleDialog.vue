<template>
  <modal :showModal="showModal" :closeAction="closeAction">
    <h1 slot="header">Simple Dialog</h1>
    <span slot="body">
      Hello <strong>simple!</strong>
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