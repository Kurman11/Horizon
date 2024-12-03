// import Style from './style.module.css'
import DevelopmentMock from './mock/DevelopmentTable/title'
import DevelopmentTableMock from './mock/DevelopmentTable/tableData'
import MainTableCard from "./MainTableCard/MainTableCard"
import CheckMock from './mock/CheckTable/title'
import CheckTableMock from './mock/CheckTable/tableData'
import Style from './style.module.css'
import SmallTableCard from './SmallTableCard/SmallTableCard'
import ColumnMock from './mock/ColumnTable/title'
import ColumnTableMock from './mock/ColumnTable/tableData'
import ComplexMock from './mock/ComplexTable/title'
import complexTableMock from './mock/ComplexTable/tableData'
export default function TablesPage(){
  return (
    <div>
      <div className={Style['table-flex']}>
        <MainTableCard
          props={{ title: "Development Table" }} 
          caption="Development Table"
          columns={DevelopmentMock}
          tableData={DevelopmentTableMock}
        />
        <MainTableCard
          props={{ title: "Check Table" }} 
          caption="Check Table"
          columns={CheckMock}
          tableData={CheckTableMock}
        />
      </div>
      <div className={Style['table-flex']}>
        <SmallTableCard
            props={{ title: "4-Column Table" }} 
            caption="4-Column Table"
            columns={ColumnMock}
            tableData={ColumnTableMock}
          />
        <SmallTableCard
            props={{ title: "Complex Table" }} 
            caption="Complex Table"
            columns={ComplexMock}
            tableData={complexTableMock}
          />
      </div>
    </div>
  )
}