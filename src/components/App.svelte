<!-- App.svelte -->
<script>
    import { Router, Route } from "svelte-routing";

    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Block from "./routes/Block.svelte";
    import NavBar from "./NavBar.svelte";
  
    export let url = "";
    export let name;

    let routes = [
        {path:"/", name:"Home", object:Home, props:{name:name}},
        {path:"about", name:"About", object:About, props:{name:name}},
        {path:"block", name:"Blocks Explorer", object: Block},
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