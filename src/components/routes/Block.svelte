<script>
    import ListItem from "../ListItem.svelte";
	import { onMount } from 'svelte';
    import { populateBlocks, returnBlocks } from '../../js/getData';
    let qrcode;
    let blocks = [];

	onMount(async () => {
        await populateBlocks();
        blocks = returnBlocks();
        });

</script>

<h1>Blocks</h1>

<div class="blocks">
	{#each blocks as block}
        <ListItem block={block}/>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<style>
	.blocks {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}

    #qrcode {
        width:160px;
        height:160px;
        margin-top:15px;
    }

	figure, img {
		width: 100%;
		margin: 0;
	}
</style>
