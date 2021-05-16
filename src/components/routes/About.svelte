<script>
    export let props;
    import QrCode from "svelte-qrcode";
</script>

<main>
    <h1>Welcome to {props.name}</h1>
    <p>This is an explorer that uses Infura API and ethers js to interact with the various chains supported by Infura (mainnet, testnets, sidechains, etc). Feel free to explore this project and share your feedback by raising issues.</p>
    <p>I will also shamelessly ask for donations (Ethereum / ERC20 compliant / BEP20 tokens).</p>
    <QrCode value="0x71e69e8e88dDd49458354667599a52dcB392129B" size=256/>
    
</main>

<style>
    h1 {
    text-align: center;
    }
    p {
		margin: 20;
		font-size: 14px;
	}
</style>