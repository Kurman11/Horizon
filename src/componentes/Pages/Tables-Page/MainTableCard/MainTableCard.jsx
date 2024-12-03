import Style from './style.module.css'
import arrow from '../image/arrow.png'
export default function MainTableCard({props, caption, columns, tableData = [] }){
  const headerKey = columns.map((header) => header.value);

  return (
    <section className={Style["section"]}>
      <div className={Style["chart-div"]}>
        <h2>{props.title}</h2>
        <button type="button">···</button>
      </div>
      <table>
        <caption>{caption}</caption>
        <colgroup>
          {columns.map((col, i) => {
            return <col width={col.width} key={i} />;
          })}
        </colgroup>
        <thead>
          <tr className={Style['card-tr']}>
            {columns.map((th, i) => {
              return <th key={i}>{th.text}<img type ='btn' src={arrow} alt="1" /></th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => {
            return (
              <tr className={Style['card-tr-font']} key={rowIndex}>
                {headerKey.map((key) => (
                  <td  key={key + rowIndex}>{row[key]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  )
}