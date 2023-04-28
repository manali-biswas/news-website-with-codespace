import './App.css';
import NavbarComponent from './components/Navbar';
import HeaderNews from './components/HeaderNews';
import BreakingNewsheader from './components/BreakingNewsHeader';
import NewsCardGrid from './components/NewsCardGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeaderNews/>
      <BreakingNewsheader/>
      <NewsCardGrid/>
      <Footer/>
    </div>
  );
}

export default App;
