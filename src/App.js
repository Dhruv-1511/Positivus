import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Service from './pages/Service';
import Usecases from './pages/Usecases';
import Price from './pages/Price';
import Blog from './pages/Blog';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/usecase" element={<Usecases />} />
          <Route path="/price" element={<Price />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
