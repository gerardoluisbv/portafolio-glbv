import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div style={{ minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column' }}>
     
      <Navbar />
      
    </div>
  );
}

export default App;
