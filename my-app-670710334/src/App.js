import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail  from './pages/MovieDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

const movies = [
  { id: 1, title: 'Interstellar', genre: 'Sci-Fi', year: 2014 },
  { id: 2, title: 'Your Name', genre: 'Animation', year: 2016 },
  { id: 3, title: 'Parasite', genre: 'Thriller', year: 2019 },
];

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
        </Routes>
      </main>
      <Footer />                {/* ← เห็นทุกหน้า */}
    </div>
    </>);
}

export default App;
