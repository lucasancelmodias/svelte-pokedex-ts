<script lang="ts">
    export let data;
</script>


<div class="grid">
{#each data.pokemon as pokemon, i}
        <div>
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{i + 1}.png' alt={pokemon.name} />
            <h5>{pokemon.name?.toUpperCase()}</h5>
        </div>
        {/each}
</div>


<style>
    .grid {
		display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: baseline;
	}

    .grid > div > h5 {
		text-align: center;
    }

</style>