import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () =>{
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const {results} = await res.json();
        return {pokemon: results}
    } catch (error) {
        console.log(`Error in load function for /: ${error}`)
    }
}