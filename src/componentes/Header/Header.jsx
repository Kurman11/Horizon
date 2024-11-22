import Style from './style.module.css'
import { useLocation } from 'react-router-dom';
const Header = ({title, litleTitle}) =>{
  const { pathname } = useLocation();
  return (
    <header className={Style.mainHeader}>
      <div>
        <div className={Style.headerDiv}>{litleTitle}</div>
        <h2 className={Style.header}>{title}</h2>
      </div>
      
      <div className={pathname === "/NFTMarketplacePage" ? Style.searchBoxPlus : Style.searchBox}>
        <input className={Style.searchInput} type="search" placeholder='Search'/>
        {pathname === "/NFTMarketplacePage" && (
          <div className={Style.searchETF}>
            <img className={Style.searchIMGETH} src="/image/searchETH.png" alt="ETH" />
            1,924 ETH
          </div>
        )}
        <img className={Style.searchImgBell} src="/image/searchBell.png" alt="bell" />
        <img className={Style.searchImgMoon} src="/image/searchmoon.png" alt="moon" />
        <img className={Style.searchImgIcon} src="/image/searchIcon.png" alt="Icon" />
        <img className={Style.searchImgPeople} src="/image/searchPeople.png" alt="people" />
      </div>
    </header>
  )
}

export default Header;