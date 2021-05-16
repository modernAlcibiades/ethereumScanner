<script>
    export let block;
	import {QRCode} from '../js/qrcode.min.js';

	let qrcode;
			
	function QR(url) {
		qrcode = new QRCode("qrcode", {
			text: url,
			width: squareSize,
			height: squareSize,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
	}				
</script>

<div class='card'>
	<div id="qrcode" on:load={qrcode}></div>
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

	p {
		margin: 0;
		font-size: 14px;
	}
</style>