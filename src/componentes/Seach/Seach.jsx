import Style from './style.module.css'
import { useLocation, Link } from "react-router-dom";

export default function Seach(){
  const { pathname } = useLocation();

  const btnArr = [
    {
      className: "search-bell",
      src: "/image/searchBell.png",
      alt: "bell",
    },
    {
      className: "search-moon",
      src: "/image/searchmoon.png",
      alt: "moon",
    },
    {
      className: "search-icon",
      src: "/image/searchIcon.png",
      alt: "Icon",
    },
    {
      className: "search-people",
      src: "/image/searchPeople.png",
      alt: "people",
    },
  ];
  return(
    <div className={Style["haeder-search"]}>
      <input type="search" placeholder="Search" />
      {pathname === "/NFTMarketplacePage" && (
        <div className={Style["search-etf"]}>
          <img src="/image/searchETH.png" alt="ETH" />
          1,924 ETH
        </div>
      )}

      {btnArr.map(({ className, alt, src }, index) => {
        return (
          <Link to="" key={index}>
            <img className={Style[className]} src={src} alt={alt} />
          </Link>
        );
      })}
    </div>
  )
}
