<script>
    export let props;
    async function getBlock(){
        return await props.blocks.getBlock();
    }

    function printBlocks(){
        return props.blocks.printBlocks();
    }
  </script>
  
<main>
    <h1>Hello {props.name}!</h1>
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
</style>
  