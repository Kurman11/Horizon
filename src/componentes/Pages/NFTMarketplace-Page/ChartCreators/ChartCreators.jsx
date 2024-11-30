import Style from './style.module.css'
import ChartTop from '../ChartTop/ChartTop'
import ChartPeople from '../ChartPeople/ChartPeople'
import Mock from '../mock/CardDummy'
export default function ChartCreators(){
  const data = Mock;
  return(
    <section className={Style["section"]}>
      <ChartTop title = {'Top Creators'}/>
      <table>
        <tr className={Style['chart-tr']}>
          <th>Name</th>
          <th>Artworks</th>
          <th>Rating</th>
        </tr>
        {data.map(({name, img, artworks, rating}, index)=>(
          <ChartPeople
          key = {index}
          img = {img}
          name = {name}
          artworks = {artworks}
          rating = {rating}/>
        ))}
        
      </table>
      
    </section>
  )
}