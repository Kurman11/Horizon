import { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const [isActive, setIsActive] = useState(0);
  const activeStyle = {
    color: '#2B3674',
  };

  return <div>
    <h1 className={style.logo}>HORIZON FREE</h1>
    <ul>
      <li><Link onClick={() => {setIsActive(0)}} className={isActive === 0 ? 'on' : ''} to = "/Main"   style={{textDecoration:"none"}}><div><img className="logoimg" src="image/mainimg.png" alt="mainimg" /> <span>Dashboard</span></div></Link></li>
      <li><Link onClick={() => {setIsActive(1)}} className={isActive === 1 ? 'on' : ''} to = "/NFT-Marketplace" style={{textDecoration:"none"}}><div><img className="logoimg" src="image/marketimg.png" alt="mainimg" /> <span>NFT Marketplace</span></div></Link></li>
      <li><Link onClick={() => {setIsActive(2)}} className={isActive === 2 ? 'on' : ''} to = "/TablesPage" style={{textDecoration:"none"}}><div><img className="logoimg" src="image/tableimg.png" alt="mainimg" /> <span>Tables</span></div></Link></li>
      <li><Link onClick={() => {setIsActive(3)}} className={isActive === 3 ? 'on' : ''} to = "/KanbanPage" style={{textDecoration:"none"}}><div><img className="logoimg" src="image/kanbanimg.png" alt="mainimg" /> <span>Kanban</span></div></Link></li>
      <li><Link onClick={() => {setIsActive(4)}} className={isActive === 4 ? 'on' : ''} to = "/ProfilePage" style={{textDecoration:"none"}}><div><img className="logoimg" src="image/profileimg.png" alt="mainimg" /> <span>Profile</span></div></Link></li>
      <li><Link onClick={() => {setIsActive(5)}} className={isActive === 5 ? 'on' : ''} to = "/SignInPage" style={{textDecoration:"none"}}><div><img className="logoimg" src="image/signinimg.png" alt="mainimg" /> <span>Sign In</span></div></Link></li>
    </ul>
    <div className={style.bottomdiv}><img className={style.bottomimg}src="image/Get Pro CTA.png" alt="CTA" /> <img className={style.vector} src="image/Vector.png" alt="vector" /></div>
  </div>;
}

// style={({isActive}) => (isActive ? activeStyle : {})}