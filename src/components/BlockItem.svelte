<script>
    export let blockNumber;
	import {QrCode} from 'svelte-qrcode';	
</script>

<div class='card'>
	<h2>{blockNumber}</h2>
	<!--div class="container">
		<QrCode value={`https://etherscan.io/block/${blockNumber}`} size=32/>
	</div-->
</div>

<style>
	.card {
		position: relative;
		margin: 0.5em;
		padding: 0.5em 0.5em 0.5em 6em;
		border: 1px solid #eee;
		border-radius: 4px;
		box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
		min-height: 5em;
	}

	.card::after {
		clear: both;
		display: block;
	}

	h2 {
		margin: 0 0 0.5em 0;
		font-size: 16px;
	}
</style>