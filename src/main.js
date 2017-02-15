import Modal from './components/Modal.vue'

const vuejsModal = {}

vuejsModal.install = (Vue) => {
  Vue.component('modal', Modal)
}

module.exports = exports.default = vuejsModal