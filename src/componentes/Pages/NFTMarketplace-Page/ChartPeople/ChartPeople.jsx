import Style from './style.module.css'

export default function ChartPeople(props){
  return (
      <tr key = {props.index} className={Style['chart-card']}>
        <td><img src={props.img} alt="1" /></td>
        <div className={Style['flex-div']}>
          <td>{props.name}</td>
          <td>{props.artworks}</td>
          <td><progress value={props.rating} max="100"></progress></td>
        </div>
      </tr>
  )
}