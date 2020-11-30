import React, { useState } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import { Projects } from "../Projects/Projects";
import ProjectDetails from "../Projects/ProjectDetails";
import NotFound from "../NotFound/NotFound";

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
  const [isRedirected, setRedirected] = useState(false);

  const handleClick = () => {
    setRedirected(true);
  };

  return (
    <section className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          {isRedirected ? <Redirect to="/about" /> : <Home />}
        </Route>
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route component={NotFound} />
      </Switch>

      <button onClick={handleClick}>Go to about</button>

      {/* <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch> */}
    </section>
  );
};

export default App;
