
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './component/Error';
import NavBar from './component/NavBar';
import Footer from './component/Footer';


function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />

    </>
    
  );
}

export default App;
