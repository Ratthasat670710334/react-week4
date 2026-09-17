import { useState } from 'react';
import { movies } from '../data/data';

function MoviePanel({ title, detail, isActive, onShow }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="font-bold text-slate-800">{title}</h3>
      {isActive ? (
        <p className="mt-2 text-slate-600">{detail}</p>
      ) : (
        <button onClick={onShow} className="mt-2 text-sm text-cyan-600">
          อ่านเรื่องย่อ
        </button>
      )}
    </div>
  );
}

function MovieAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);   // เปิดเรื่องแรกไว้ก่อน

  return (
    <div className="mx-auto max-w-md space-y-3 p-6">
      {movies.map((m, i) => (
        <MoviePanel
          key={m.id}
          title={m.title}
          detail={m.detail}
          isActive={activeIndex === i}          // แม่เป็นคนบอกว่าเปิดไหม
          onShow={() => setActiveIndex(i)}     // ลูกแค่ "ขอ" ให้เปิดตัวเอง
        />
      ))}
    </div>
  );
}

export default MovieAccordion;