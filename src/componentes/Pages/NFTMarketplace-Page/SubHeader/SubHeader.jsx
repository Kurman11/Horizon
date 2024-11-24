import Style from './style.module.css'
import {Link, useLocation } from "react-router-dom";
export default function SubHeader(){
  const { pathname } = useLocation();
  const btnArr =[
    {
      className: "Art",
      to : '/Art'
    },
    {
      className: "Music",
      to : '/Music'
    },
    {
      className: "Collectibles",
      to : '/Collectibles'
    },
    {
      className: "Sports",
      to : '/Sports'
    },
  ]
  return (
    <div className={Style["sub-header"]}>
      <div className={Style["sub-font"]}>Trending NFTs</div>
      <ul>
        {btnArr.map(({className, to}, index) => {
          return(
          <li key ={index}>
            <Link
              className={pathname === to ? Style.on: ""}
              to={to} 
            >
              {className}
            </Link>
          </li>
          );
        })}
      </ul>
    </div>
    
  )
}