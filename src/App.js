
import './App.css';
import Blog from './components/screens/Blog';
import Blogs from './components/screens/Blogs';
import Header from './components/screens/includes/Header';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />    
        </Routes>
      </Router>
    </>
  );
}

export default App;
