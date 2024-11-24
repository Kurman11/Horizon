// import Style from './style.module.css'
import {Route,Routes} from "react-router-dom";
import SubHeader from "./SubHeader/SubHeader";
import Art from "./pages/Art";
import Collectibles from "./pages/Collectibles";
import Music from "./pages/Music";
import Sports from "./pages/Sports";
import NFTcard from './NFTcard/NFTcard.jsx'
import cardImage from './image/Card.png'
import GropImage from './image/Group.png'

export default function NFTMarketplacePage(){
  return(
    <div>
      <SubHeader/>
      <NFTcard
        mainImg = {cardImage}
        alt = 'sub메인 이미지'
        firstText = 'Abstract Colors'
        peopleimg = {GropImage}
        peopleimgAlAlt = '좋아요누른 사람들'
        firstTextSub = 'By Esthera Jackson'
        secondTextSub = 'Current Bid : 0.91ETH'
      />
      <Routes>
          <Route path='/Art' element ={<Art/>}/>
          <Route path='/Collectibles'element={<Collectibles/>}/>
          <Route path='/Music'element={<Music/>}/>
          <Route path='/Sports'element={<Sports/>}/>
      </Routes>

      
    </div>
  )
}