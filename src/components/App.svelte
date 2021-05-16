<!-- App.svelte -->
<script>
    import { Router, Route } from "svelte-routing";

    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Block from "./routes/Block.svelte";
    import NavBar from "./NavBar.svelte";
  
    export let url = "";
    export let name;
    export let blocks;
    let props = {name:name, blocks:blocks};

    let routes = [
        {path:"/", name:"Home", object:Home, props:props},
        {path:"about", name:"About", object:About, props:props},
        {path:"block", name:"Blocks Explorer", object: Block, props:props},
    ];
    //      <Route path="block/:id" component="{BlockDetails}" />
  </script>
  
  <Router url="{url}">
    <div class="container">
        <NavBar pages={routes}/>
        <div>
        {#each routes as r}
        <Route path={r.path}><svelte:component this={r.object} props={r.props}/></Route>
        {/each}
        </div>
    </div>
  </Router>