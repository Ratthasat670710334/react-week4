import ProfileCard from './ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'FSFSFFS', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
  { id: 2, name: 'H5898', nickname: 'klan',
  major: 'เทคโนโลยีสารสนเทศ', favorites: ['M150', 'หมา'] },


  { id: 3, name: 'JK595564', nickname: 'Jack',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชานม', 'แมว'] },
    
  { id: 4, name: 'ERTY56U', nickname: 'จอย',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โกโก้', 'หนู'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;