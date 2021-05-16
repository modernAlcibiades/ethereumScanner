<script>
    export let block;
	import {QrCode} from 'svelte-qrcode';

	let qrcode;
			
	function QR(url) {
		qrcode = QrCode("qrcode", {
			value: url,
		});
	}				
</script>

<div class='card'>
	<div id="qrcode" src={qrcode} on:load={QR(block.url)}></div>
	<h2>{block.number}</h2>
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

	#qrcode {
		position: absolute;
		width: 5em;
		height: 5em;
		left: 0.5em;
		top: 0.5em;
		border-radius: 50%;
		background: no-repeat 50% 50%;
		background-size: cover;
	}

	h2 {
		margin: 0 0 0.5em 0;
		font-size: 16px;
	}
</style>