import Style from './style.module.css'

export default function Card(props){
  return (
    <section className={Style["section"]}>
      <div className={Style["chart-div"]}>
        <h2>{props.title}</h2>
        <button type="button">+</button>
      </div>
      {props.children}
    </section>
  )
}