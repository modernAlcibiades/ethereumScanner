<script>
    import BlockItem from "../BlockItem.svelte";
	import { onMount } from 'svelte';
    export let props;
    let chains = [
        'mainnet',
        'ropsten',
        'rinkeby',
    ]
    let selectedChain = chains[0];
    let selectedValue;
    let bls = [];

    async function getBlock(){
        let val = await props.blocks.getBlock();
        if (!bls.includes(val)){
            bls.push(val);
        }
    }

    function printBlocks(){
        props.blocks.printBlocks();
    }

    async function updateChain(){
        console.log("selected network : ", selectedChain);
        props.blocks.setChain(selectedChain);
        await props.blocks.populateBlocks();
    }

    async function updateBlocks(){
        bls = Object.keys(await props.blocks.returnBlocks()).sort();
        console.log(bls);
    }

	onMount(async () => {
        await updateChain();
        await updateBlocks();
        });
  </script>

<main>
    <h1>Hello {props.name}!</h1>
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
    <div class="container">
        <!-- svelte-ignore a11y-no-onchange -->
        <select bind:value={selectedChain} on:change="{updateChain}">
            {#each chains as chain}
                <option value={chain}>
                    {chain}
                </option>
            {/each}
        </select>
        <button on:click={getBlock}>Get Current Block</button>
        <button on:click={printBlocks}>Print Blocks Trie</button>
    </div>

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
  