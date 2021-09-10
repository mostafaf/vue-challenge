<template>
  <div id="app">
    <b-container id="pokemon_list" class="bv-example-row">
      <b-row>
        <b-col lg="3" md="6" v-for="(item, index) in items" :key="index">
          <router-link :to="`/detail/${index}`">
            <PokemonItems  :pokemon="item" ></PokemonItems>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
  
</template>

<script>
import { getAll } from "@/components/pokemon/pokemon.api"
import PokemonItems from '@/components/pokemon/PokemonItems.vue'

export default {
  name: 'Home',
  components: {
    PokemonItems,
  },
  data () {
      return {
          items: null,  
      }
  },

  async created() {
    const data = await getAll();
    this.items = data.results;
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
