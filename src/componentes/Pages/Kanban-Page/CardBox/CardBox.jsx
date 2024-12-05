import Style from './style.module.css'
import write  from '../../Kanban-Page/image/button.png'
import follow from '../../Kanban-Page/image/follow.png'
export default function CardBox(props){
  const renderAlarm = () => {
    switch (props.alarm) {
      case "UPDATES":
        return <div className={Style['alarm-box-update']}>UPDATES</div>
      case "PENDING":
        return <div className={Style['alarm-box-pending']}>PENDING</div>
      case "ERRORS":
        return <div className={Style['alarm-box-error']}>ERRORS</div>
      case "DONE":
        return <div className={Style['alarm-box-done']}>DONE</div>
      default:
        return null;
    }
  };
  return (
    <section className={Style['box']}>
      <div className={Style['header-flex']}>
        <h3>{props.header}</h3>
        <button><img src={write} alt="글쓰기" /></button>
      </div>
      <div className={Style['content-style']}>
        {props.img === '' ? props.content : <img className={Style['card-img']} src={props.img} alt="카드 메인 이미지" />}
      </div>
      <div className={Style['content-style']}>
        {props.img !== '' ? props.content : ''}
      </div>
      <div className={Style['alarm-box']}>
        <img src={follow} alt="팔로우사람" />
        {renderAlarm()}
      </div>
    </section>
  )
}