<script>
    import BlockItem from "../BlockItem.svelte";
	import { onMount } from 'svelte';
    export let props;
    let bls = [];
	onMount(async () => {
        await props.blocks.populateBlocks();
        bls = Object.keys(await props.blocks.returnBlocks()).sort();
        console.log(bls);
        });

</script>
<div class="container">
    <h1>Blocks</h1>
    <div class=grid id=whatever>
        {#each bls as bn}
            <BlockItem blockNumber={bn}/>
        {:else}
            <!-- this block renders when photos.length === 0 -->
            <p>loading...</p>
        {/each}
    </div>
</div>

<style>
	#whatever {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}
</style>
