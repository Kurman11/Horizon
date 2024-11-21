import './App.css';
import Sidebar from './componentes/Sidebar/Sidebar';
import {Route,Routes,Link} from 'react-router-dom'
import KanbanPage from './componentes/Pages/Kanban-Page/KanbanPage';
import NFT_MarketplacePage from './componentes/Pages/NFT-Marketplace-Page/NFT-MarketplacePage';
import ProfilePage from './componentes/Pages/Profile-Page/ProfilePage';
import SignInPage from './componentes/Pages/Sign-in-Page/SignInPage';
import TablesPage from './componentes/Pages/Tables-Page/TablesPage';
import Main from './componentes/Pages/Dashboard-Main-Page/Main';

function App() {
  return (
    <div className="App">
      <div className='main-div'>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <main className='mainbox'>
          <Routes>
            <Route path='/Main' element={<Main/>}/>
            <Route path='/NFT-Marketplace'element={<NFT_MarketplacePage/>}/>
            <Route path='/TablesPage'element={<TablesPage/>}/>
            <Route path='/KanbanPage'element={<KanbanPage/>}/>
            <Route path='/ProfilePage'element={<ProfilePage/>}/>
            <Route path='/SignInPage'element={<SignInPage/>}/>
          </Routes>
        </main>
      </div>
    </div>
  );
}



export default App;
