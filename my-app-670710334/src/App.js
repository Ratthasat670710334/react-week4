import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
  <span className="text-xl font-bold text-white">🎬 MovieHub</span>
  <div className="flex gap-6 text-slate-300">
    <a href="#">หน้าแรก</a>
    <a href="#">หนังใหม่</a>
    <a href="#">รายการโปรด</a>
  </div>
</nav>

      <div className="bg-slate-100 text-center">
        <h1 className="text-4xl font-bold text-slate-800">MovieHub</h1>
        <p className="text-lg text-slate-500">รวมหนังดีที่คุณห้ามพลาด</p>
        <p className="text-sm uppercase text-cyan-600 font-semibold">since 2026</p>
      </div>


      <div className="max-w-sm mx-auto mt-10 rounded-2xl border border-slate-200
                bg-white p-6 shadow-lg">
  <h2 className="text-xl font-bold text-slate-800">Interstellar</h2>
  <p className="mt-2 text-slate-500">การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ</p>
  <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1
                   text-sm font-semibold text-cyan-700">Sci-Fi</span>
</div>

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  <div className="rounded-xl bg-white p-4 shadow">การ์ด 1</div>
  <div className="rounded-xl bg-white p-4 shadow">การ์ด 2</div>
  <div className="rounded-xl bg-white p-4 shadow">การ์ด 3</div>
</div>

<button className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white
                   transition hover:bg-cyan-700 hover:shadow-lg
                   focus:outline-none focus:ring-2 focus:ring-cyan-400">
  สมัครเรียน
</button>

</>);
}

export default App;
