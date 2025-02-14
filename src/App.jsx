import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import FauxKids from "./FauxKids"
import FauxWomen from "./FauxWomen"
import FauxMen from "./FauxMen"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faux-kids" element={<FauxKids />} />
        <Route path="/faux-women" element={<FauxWomen />} />
        <Route path="/faux-men" element={<FauxMen />} />
      </Routes>
    </Router>
  )
}

export default App
