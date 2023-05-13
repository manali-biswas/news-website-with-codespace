import './App.css';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/article' element={<Article/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
