<!-- App.svelte -->
<script>
    import { Router, Link, Route } from "svelte-routing";

    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Block from "./routes/Block.svelte";
  
    export let url = "";
    export let name;
    //      <Route path="block/:id" component="{BlockDetails}" />
  </script>
  
  <Router url="{url}">
    <nav>
      <Link to="/" name={name}>Home</Link>
      <Link to="about">About</Link>
      <Link to="block">Block</Link>
    </nav>
    <div>
      <Route path="block" component="{Block}" />
      <Route path="about" component="{About}" />
      <Route path="/"><Home /></Route>
    </div>
  </Router>