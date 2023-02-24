import React from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import NotFound from "./components/NotFound/NotFound";

/* 
  1. Install "react-router-dom". (In your terminal)
  2. <BrowserRouter> --> Stores the current browser location and navigates . (wrapped around <App> in index.js)
  3. Create components to render. (Components folder)
  4. <Routes> --> Matches the current location with one of the child routes.
  5. <Route> --> Couples URL location with React component. Placed between <Routes> element.
  6. <Link> --> Attach clickable links to different pages. (In Navbar component)
  7. <NavLink> --> special version of <Link> that adds styling attributes. (In Navbar component)
*/

const App = () => {
  return (
    <section className="container is-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Routes>
        <Route path="/about" element={About} />
        <Route path="/" element={Home} />
      </Routes> */}
    </section>
  );
};

export default App;
