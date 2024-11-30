import Style from './style.module.css'

export default function ChartTop(props) {
  return(
  <div className={Style["chart-div"]}>
    <h2>{props.title}</h2>
    <button type="button">See all</button>
  </div>
  )
}