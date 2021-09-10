<template>
   <div>
    <footer class="bg-info mt-5 text-center py-3 text-light">
        <b-container fluid>
            <b-row class="mx-0">
                <b-col cols="12">
                    {{version}}
                </b-col>
            </b-row>
        </b-container>
    </footer>
   </div>
</template>

<script>

export default {

  data () {
      return {
          version: null,  
      }
  },

  async created() {
    this.$store.commit('setVersion');
    this.version = "Vue Version : " + this.$store.state.version;
  }
}
</script>