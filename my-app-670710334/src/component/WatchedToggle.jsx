function WatchedToggle() {
  const [watched, setWatched] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {watched
        ? <p className="text-green-600">ดูแล้ว 🍿</p>
        : <p className="text-slate-400">ยังไม่ได้ดู</p>}

      <button onClick={() => setWatched(!watched)}
              className="rounded bg-cyan-600 px-3 py-1 text-white">
        {watched ? 'ยังไม่ได้ดู' : 'ดูแล้ว'}
      </button>
    </div>
  );
}
export default WatchedToggle ;