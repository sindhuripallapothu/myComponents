import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function RouteExample() {
  return (
    <Router>
      <nav>
        <NavLink to="/home" end>Home</NavLink> {" "}
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default RouteExample;
