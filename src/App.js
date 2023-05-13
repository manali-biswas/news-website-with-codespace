import './App.css';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import { useState } from 'react';

function App() {
  const [currentNews, setCurrentNews] = useState([])

  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path='/article/:id' element={<Article news={currentNews}/>}/>
          <Route path='/*' element={<Home newsSetter={setCurrentNews}/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
