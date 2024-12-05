import Approved from '../../image/approved.png'
import Disable from '../../image/disable.png'
import Error from '../../image/error.png'
import Style from './style.module.css'
const tableData = [
  {
    classification: <p>Marketplace</p>,
    sub: <>
    <img className={Style['td-img']} src={Approved} alt="Approved" />Approved
    </>,
    name: "24.Jan.2021",
    info: <progress className={Style['prg']} value="70" max="100"></progress>,
  },
  {
    classification: <p>Venus Dashboard Builder</p>,
    sub: <>
    <img className={Style['td-img']} src={Disable} alt="Disable" />Disable
    </>,
    name: "30.Dec.2021",
    info: <progress className={Style['prg']} value="35" max="100"></progress>,
  },
  {
    classification: <p>Venus Design System</p>,
    sub:  <>
    <img className={Style['td-img']} src={Error} alt="Error" />Error
    </>,
    name: "20.May.2021",
    info: <progress className={Style['prg']} value="90" max="100"></progress>,
  },
  {
    classification: <p>Uranus</p>,
    sub: <>
    <img className={Style['td-img']} src={Approved} alt="Approved" />Approved
    </>,
    name: "12.Jul.2021",
    info: <progress className={Style['prg']} value="50" max="100"></progress>,
  }
];

export default tableData;