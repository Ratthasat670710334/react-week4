import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Greeting  from './Greeting';

const students = [
  { id: 1, name: 'ฝน',   year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];


function App() {
  const HH_Music_Year = 2025;


  return (
    <>
      <div>
        <h1> {HH_Music_Year} </h1>

        <p> {new Date().toLocaleDateString('EN-en')} </p>
      </div>

      <div>
        <h1>แอปของฉัน</h1>
        <Hello />               {/* 2. ใช้เหมือนแท็ก HTML */}
        <HH />
      </div>

      <div>
        <Greeting name="Trump" year={2}></Greeting>
      </div>

      <div>
      <h1>รายชื่อนักศึกษา</h1>
      {students.map((s) => (
        <Greeting key={s.id} name={s.name} year={s.year} />
      ))}
    </div>

    </>
  );
}

export default App;
