import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
})

export async function getAll(){
    try{
        const { data } = await axiosClient.get('/pokemon?limit=100');
        return data;
    }catch(error){
        return [error];
    }
}

export async function getPokemon(url: string){
    try{
        const { data } = await axios.get(`${url}`);
        return data;
    }catch(error){
        return [error];
    }
}

export async function getPokemonById(id: number){
    try{
        const { data } = await axiosClient.get(`/pokemon/${id}`);
        return data;
    }catch(error){
        return [error];
    }
}