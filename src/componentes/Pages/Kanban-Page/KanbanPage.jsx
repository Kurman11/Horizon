// import Style from './style.module.css'
import Card from "./Card/Card";
import CardBox from "./CardBox/CardBox";
import mock from './mock/Backlog/dummy';
import progress from './mock/InProgress/dummy'
import Style from './style.module.css'
import doneMock from './mock/Done/dummy'
export default function KanbanPage(){
  const data = mock;
  const progressData = progress;
  const doneData = doneMock;
  return (
    <div className={Style['kanban-div']}>
      <>
        <Card title={'Backlog'}>
          {data.map(({header,img,content,alarm}, index) => (
            <CardBox
            key ={index}
            header = {header}
            img = {img}
            content = {content}
            alarm = {alarm}
            />
          ))}
        </Card>

        <Card title={'In progress'}>
          {progressData.map(({header,img,content,alarm}, index) => (
            <CardBox
            key ={index}
            header = {header}
            img = {img}
            content = {content}
            alarm = {alarm}
            />
          ))}
        </Card>

        <Card title={'Done'}>
          {doneData.map(({header,img,content,alarm}, index) => (
            <CardBox
            key ={index}
            header = {header}
            img = {img}
            content = {content}
            alarm = {alarm}
            />
          ))}
        </Card>
      </>
    </div>
  );
}