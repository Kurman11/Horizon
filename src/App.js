import './App.css';
import Sidebar from './componentes/Sidebar';
function App() {
  return (
    <div className="App">
      <div className='main-div'>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <main className='mainbox'></main>
      </div>
    </div>
  );
}

export default App;
