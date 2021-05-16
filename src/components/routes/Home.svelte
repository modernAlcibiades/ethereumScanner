<script>
    import BlockItem from "../BlockItem.svelte";
	import { onMount } from 'svelte';
    export let props;
    async function getBlock(){
        return await props.blocks.getBlock();
    }

    function printBlocks(){
        bls.push(props.blocks.printBlocks());
    }

    let bls = [];
	onMount(async () => {
        await props.blocks.populateBlocks();
        bls = Object.keys(await props.blocks.returnBlocks()).sort();
        console.log(bls);
        });
  </script>

<main>
    <h1>Hello {props.name}!</h1>
    <div class="container">
        <h1>Blocks</h1>
        <div class=grid id=whatever bind:this={bls}>
            {#each bls as bn}
                <BlockItem blockNumber={bn}/>
            {:else}
                <!-- this block renders when photos.length === 0 -->
                <p>loading...</p>
            {/each}
        </div>
    </div>
    <button on:click={getBlock}>Get Current Block</button>
    <button on:click={printBlocks}>Print Blocks Trie</button>
</main>


<style>
h1 {
    text-align: center;
}
button {
    text-align: center;
}

#whatever {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}
</style>
  