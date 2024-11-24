import Style from './style.module.css'
import { useState } from 'react'

export default function Main(props) {
  const [isActive, setIsActive] = useState(0);
  const Click = () => {
    setIsActive(prev => (prev === 0 ? 1 : 0));
  };
  return (
    <ul className={Style['NFT-ul']}>
        <li>
          <figure>
            <img className={Style['img-size']} src={props.mainImg} alt={props.alt} />
            <button className={isActive === 0 ? Style['like-Btn'] : Style['like-Btn-on']} onClick={Click}>♡</button>
            <div className={Style['NFT-font']}>
              <div>
                <div className={Style['NFT-font-main']}>{props.firstText}</div>
                <div className={Style['NFT-font-sub']}>{props.firstTextSub}</div>
              </div>
              <img src={props.peopleimg} alt={props.peopleimgAlAlt}/>
            </div>
            <div className={Style['NFT-second-font']}>
              <div className={Style['NFT-second-subfont']}>{props.secondTextSub}</div>
              <div className={Style['NFT-second-box']}>Place Bid</div>
            </div>
          </figure>
        </li>
      </ul>
  )
}