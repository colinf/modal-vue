<template>
  <div :class="containerClass">
    <div :class="{modal: true, in: showModal}" :style="{ display: showModal ? 'block' : 'none' }" @click="modalClick" ref="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div v-if="this.$slots.header || closeAction" class="modal-header">
            <button class="close" @click="closeAction">x</button>
            <slot name="header"></slot>
          </div>
          <div v-if="this.$slots.body" class="modal-body">
            <slot name="body"></slot>
          </div>
          <div v-if="this.$slots.footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
    <div :class="{'modal-backdrop': showModal, in: showModal}"></div>
  </div>
</template>

<script>
  export default {
    props: {
      showModal: Boolean,
      closeAction: Function,
      containerClass: String,
      closeOnOverlayClick: Boolean,
    },
    methods: {
      modalClick(e) {
        // the modal-backdrop is not accessible because of `display: block`.
        // because of this, we need to ensure the clicked target is our modal container,
        // which takes up the entire viewport.
        if (!this.closeOnOverlayClick || e.target != this.$refs.modal) {
          return;
        }

        // only call the close action if it exists
        if (this.closeAction) {
          this.closeAction();
        }

        e.stopPropagation();

        return false;
      },
    },
  }
</script>

<style scoped>

</style>