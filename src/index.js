import App from './components/App.svelte';
import { blocks } from './js/blocks.js';
const app = new App({
    target: document.body,
    props: {
        name: 'Ethereum Explorer',
        blocks: blocks
    },
});

export default app;