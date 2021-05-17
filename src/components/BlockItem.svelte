<script>
    export let blockNumber;
	//import {QrCode} from 'svelte-qrcode';	
	import QR from 'svelte-qr'
	let qrcode = `https://etherscan.io/block/${blockNumber}`;
	console.log(qrcode);
</script>

	<div class='card'>
		<h2>{blockNumber}</h2>
		<div id='qr'>
			<QR bind:text={qrcode}/>
		</div>
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
		max-width: 20em;
	}

	#qr{
		max-width: 16em;
		max-height: 16em;
	}
	h2 {
		margin: 0 0 0.5em 0;
		font-size: 16px;
	}
</style>