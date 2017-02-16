<template>
  <modal :showModal="showModal" :closeAction="closeAction">
    <h1 slot="header">Full Dialog</h1>
    <span slot="body">
      Not such a <strong>fool!</strong>
    </span>
    <div slot="footer">
      <button @click="clickAction">Start again</button>
    </div>
  </modal>
</template>

<script>
  import Modal from 'modal-vue'
  export default {
    props: ['showModal', 'closeAction', 'clickAction'],
    components: { Modal }
  }
</script>

<style scoped>

</style>