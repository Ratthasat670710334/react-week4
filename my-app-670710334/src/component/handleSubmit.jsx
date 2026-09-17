function handleSubmit(e) {
  e.preventDefault();               // ⭐ กันเบราว์เซอร์รีเฟรชหน้า (พฤติกรรมเดิมของ form)
  if (title.trim() === '') return;  // validate ง่าย ๆ: ห้ามว่าง
  console.log('เพิ่มหนัง:', title, genre);
  setTitle('');                     // เคลียร์ช่องหลังส่ง
}

<form onSubmit={handleSubmit}>
  <input value={title} onChange={(e) => setTitle(e.target.value)} />
  <button type="submit">เพิ่ม</button>
</form>
export default handleSubmit;