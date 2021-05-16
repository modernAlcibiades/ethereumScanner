<script>
    export let props;
    import { getBlock, blocks } from '../../js/getData';

    let start;
    let end;

  </script>
  
<main>
    <h1>Hello {props.name}!</h1>
    <button on:click={getBlock('latest')}>Get Current Block</button>
</main>


<style>
h1 {
    text-align: center;
}
button {
    text-align: center;
}
</style>
  