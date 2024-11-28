import Style from './style.module.css'
import ChartCard from '../chart-card/ChartCard'
import { useState, useEffect} from "react";
import Mock from '../mock/dummy.js'
import ETH from '../image/ETHIcon.png'
export default function Chart(props){
  const [data, setData] = useState([]);
  useEffect(()=>{
    setData(Mock);
  },[])
  return(
    <section className={Style['section']}>
      <div className={Style['chart-div']}> 
        <h2>{props.title}</h2>
        <button>See all</button>
      </div>
      <div className={Style['second-chart']}>
        {data.map(({ title, name, bit, img}) =>(
          <ChartCard 
            img ={img}
            title = {title}
            subtitle = {name}
            ETHimg = {ETH}
            ETHAlt = {'ETH이미지'}
            bit = {bit}/>
        ))}
      </div>
      
    </section>
  )
}