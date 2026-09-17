import { Link } from 'react-router-dom';

function About() {
  return (
    <>
    <div className="p-16 text-center">
      <h1 className="text-6xl font-bold text-slate-300">Title</h1>
      <p className="mt-4 text-slate-500">670710334</p>
      <Link to="/" className="mt-6 inline-block text-cyan-600 hover:underline">
        กลับหน้าแรก
      </Link>
    </div>


<div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6">
        <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">
          <img src="/tmdb.svg" alt="TMDB" className="h-6" />
        </a>
        <p className="text-sm text-slate-500">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
      </>
  );
}

export default About;