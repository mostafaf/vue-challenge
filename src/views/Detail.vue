<template>
  <b-container>
    <b-row>
      <b-col lg="6">
        <b-img :src="imgUrl" fluid-grow alt="fluid-grow image "></b-img>
      </b-col>
      <b-col lg="6" >
          <h3>{{ extraData.name }}</h3>
          <b-row class="h-75">
            <b-col align-self="end">
              <b-button variant="success" >Add to my cards</b-button>
            </b-col>
          </b-row>
          
      </b-col>      
    </b-row>
    <b-row class="mt-5">
      <b-tabs content-class="mt-3">
        <b-tab title="moves" active>
          <b-row>
            <b-col cols="6" v-for="(item, index) in this.moves" :key="index">
              {{ item.move.name }}
            </b-col>
          </b-row>         
        </b-tab>
        <b-tab title="abilities">
          <b-row>
            <b-col cols="6" v-for="(item, index) in this.abilities" :key="index">
              {{ item.ability.name }}
            </b-col>
          </b-row> 
        </b-tab>
      </b-tabs> 
    </b-row>
   
  </b-container>
</template>

<script>

import { getPokemonById } from "@/components/pokemon/pokemon.api";
export default {
  name: 'Detail',
  components: {

  },
  data () {
      return {
          extraData: null,  
          imgUrl: null,
          abilities: null,
          moves: null
        }
  },
  async created() {
    const data = await getPokemonById(this.$route.params.id);
    this.extraData = data;
    this.imgUrl = data.sprites.front_shiny;
    this.abilities = data.abilities;
    this.moves = data.moves;
    
  }  
  
}
</script>

<style>

</style>
