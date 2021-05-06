import React from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import NotFound from "./components/NotFound/NotFound";

/* 
  1. Install "react-router-dom". (In your terminal)
  2. <BrowserRouter> --> Helps rendering components passed to it. (wrapped around <App> in index.js)
  3. Create components to render. (Components folder)
  4. <Switch> --> Ensures that only one component is rendered at a time.
  5. <Route> --> Links between the components. Placed between <Switch> element.
  6. <Link> --> Attach clickable links to different pages. (In Navbar component)
  7. <NavLink> --> special version of <Link> that adds styling attributes. (In Navbar component)
*/

const App = () => {
  return (
    <section className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route component={NotFound} />
      </Switch>

      {/* <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch> */}
    </section>
  );
};

export default App;
