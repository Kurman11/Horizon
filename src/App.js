import './App.css';
import Sidebar from './componentes/Sidebar/Sidebar';
import {Route,Routes,useLocation} from 'react-router-dom'
import KanbanPage from './componentes/Pages/Kanban-Page/KanbanPage';
import NFTMarketplacePage from './componentes/Pages/NFTMarketplace-Page/NFTMarketplacePage';
import ProfilePage from './componentes/Pages/Profile-Page/ProfilePage';
import SignInPage from './componentes/Pages/Sign-in-Page/SignInPage';
import TablesPage from './componentes/Pages/Tables-Page/TablesPage';
import Main from './componentes/Pages/Dashboard-Main-Page/Main';
import Header from './componentes/Header/Header';
function App() {
  const litleLocation = useLocation();
  const location = useLocation();

  const pageLitleTitles = {
    '/' : 'Pages / Dashboard',
    '/Main' : 'Pages / Dashboard',
    '/NFTMarketplacePage' : 'Pages / NFT Marketplace',
    '/TablesPage' : 'Pages / Tables',
    '/KanbanPage' : 'Pages / Kanban',
    '/ProfilePage' : 'Pages / Profile', 
  }
  const pageTitles = {
    '/' : 'Main Dashboard',
    '/Main' : 'Main Dashboard',
    '/NFTMarketplacePage' : 'NFT Marketplace',
    '/TablesPage' : 'TablesPage',
    '/KanbanPage' : 'KanbanPage',
    '/ProfilePage' : 'ProfilePage',
  }

  const title = pageTitles[location.pathname] || 'Default Title';
  const litleTitle = pageLitleTitles[litleLocation.pathname] || 'Default litle Title'
  return (
    <div className="App">
      <div className='main-div'>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <main className='mainbox'>
          <Header litleTitle = {litleTitle} title={title} />
          <Routes>
            <Route path='/' element ={<Main/>}/>
            <Route path='/Main' element={<Main/>}/>
            <Route path='/NFTMarketplacePage'element={<NFTMarketplacePage/>}/>
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
