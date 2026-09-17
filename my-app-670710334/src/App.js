
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail  from './pages/MovieDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Watchlist from './pages/Watchlist';


function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />                {/* ← เห็นทุกหน้า */}
      <main className="flex-1">
        <Routes>                {/* ← เฉพาะตรงนี้ที่สลับตาม URL */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/watchlist" element={<Watchlist />} />

          
          <Route path="*" element={<NotFound />} />   {/* ← ดักทุกอย่างที่เหลือ ไว้ล่างสุด */}
        </Routes>
      </main>
      <Footer />                {/* ← เห็นทุกหน้า */}
    </div>
    </>);
}

export default App;
