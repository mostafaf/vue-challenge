<template>

  <div class="container">
  <b-card
    :title="`${ pokemon.name }`"
    :img-src="`${ imgUrl }`"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <b-card-text>
    subtitle
  </b-card-text>
  <hr>
    <b-card-text class="ability">
      <b-row>
        <b-col cols="6" v-for="(item, index) in this.abilities" :key="index">
          {{ item.ability.name }}
        </b-col>
      </b-row>
    </b-card-text>

  </b-card>


  </div>
</template>
<style>
.ability {
  font-size: 10px;
}

</style>
<script>
import { getPokemon } from "@/components/pokemon/pokemon.api";
export default { 
  props: {
    pokemon: {
      type: Object,
      default () {
        return { message: 'null' }
      }
    }
  },
  data () {
      return {
          extraData: null,  
          imgUrl: null,
          abilities: null,
        }
  },
  async created() {
    const data = await getPokemon(this.pokemon.url);
    this.extraData = data.results;
    this.imgUrl = data.sprites.front_shiny;
    this.abilities = data.abilities;
    
  }  
}


</script>

