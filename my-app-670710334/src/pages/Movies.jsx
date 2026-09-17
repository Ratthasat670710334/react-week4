import { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/data';

// ลูกคนที่ 1: ไม่มี state ของตัวเอง รับค่ากับฟังก์ชันจากแม่
function SearchBox({ query, onQueryChange }) {
  return (
    <input
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder="ค้นหาหนัง..."
      className="w-full rounded-lg border border-slate-300 px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  );
}

// ลูกคนที่ 2: แค่วาดรายการที่ได้รับมา
function MovieGrid({ movies }) {
  if (movies.length === 0) {
    return <p className="mt-6 text-center text-slate-400">ไม่พบหนังที่ค้นหา 🔍</p>;
  }
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {movies.map(m => (
        <Link key={m.id} to={`/movies/${m.id}`}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                         transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
          <p className="mt-1 text-sm text-slate-500">ปี {m.year} | {m.genre}</p>
        </Link>
      ))}
    </div>
  );
}

// แม่: ถือ state ชุดเดียว แล้วแจกให้ลูกทั้งสอง
function Movies() {
  const [query, setQuery] = useState('');

  const shown = movies.filter(m =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-4 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>
      <SearchBox query={query} onQueryChange={setQuery} />
      <MovieGrid movies={shown} />
    </div>
  );
}

export default Movies;