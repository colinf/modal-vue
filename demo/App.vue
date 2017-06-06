<template>
  <div id="app">
    <div class="container">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h5>Select Example</h5>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <select v-model="exampleName">
                <option v-for="example in ['', ...examples]">{{ example.name }}</option>
              </select>
              {{ exampleText }}
            </div>
            <div v-if="exampleName" class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <button @click="showModal = true">Show it</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <simple-dialog v-if="exampleName==='Simple'" :showModal="showModal" :closeAction="closeDialog"></simple-dialog>
    <full-dialog v-if="exampleName==='Full'" :showModal="showModal" :closeAction="closeDialog" :clickAction="clickAction"></full-dialog>
  </div>
</template>

<script>
  import SimpleDialog from './SimpleDialog.vue'
  import FullDialog from './FullDialog.vue'
  export default {
    components: { SimpleDialog, FullDialog },
    data () {
      return {
        showModal: false,
        exampleName: '',
        examples: [
          {
            name: 'Simple',
            text: 'A simple example with header and footer text.'
          },
          {
            name: 'Full',
            text: 'A more complex example with a button in the footer.'
          }
        ]
      }
    },
    computed: {
      exampleText () {
        if (!this.exampleName) return ''
        let exampleArray = this.examples.filter(ex => ex.name === this.exampleName)
        return exampleArray[0].text
      }
    },
    methods : {
      closeDialog () {
        this.showModal = false
      },
      clickAction () {
        this.exampleName = ''
        this.showModal = false
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
