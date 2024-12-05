import apple from '../../image/apple.png'
import android from '../../image/and.png'
import window from '../../image/windows.png'
import Style from './style.module.css'
const tableData = [
  {
    classification: <p>Marketplace</p>,
    sub: <>
      <img src={apple} alt="apple" /> &ensp;
      <img src={android} alt="android" /> &ensp;
      <img src={window} alt="window" />
    </>,
    name: "12.Jan.2021",
    info: <>
    <div className={Style['td-div']}>
      75.5% <progress className={Style['prg']} value="75.5" max="100"></progress>
    </div>
  </>
  },
  {
    classification: <p>Venus DB PRO</p>,
    sub: <>
      <img src={apple} alt="apple" />
      </>,
    name: "21.Feb.2021",
    info: <>
    <div className={Style['td-div']}>
      35.4%<progress className={Style['prg']} value="35.4" max="100"></progress>
    </div>
    
  </>
  },
  {
    classification: <p>Venus DS</p>,
    sub: <>
      <img src={apple} alt="apple" /> &ensp;
      <img src={android} alt="android" /> &ensp;
      <img src={window} alt="window" />
    </>,
    name: "13.Mar.2021",
    info: <>
    <div className={Style['td-div']}>
      25% <progress className={Style['prg']} value="25" max="100"></progress>
    </div>
  </>
  },
  {
    classification: <p>Venus 3D Asset</p>,
    sub: <>
      <img src={apple} alt="apple" /> &ensp;
      <img src={window} alt="window" />
    </>,
    name: "24.Jan.2021",
    info: <>
    <div className={Style['td-div']}>
      100% <progress className={Style['prg']} value="100" max="100"></progress>
    </div>
    
  </>
  },
  {
    classification: <p>Uranus</p>,
    sub: <>
    <img src={apple} alt="apple" /> &ensp;
    <img src={window} alt="window" />
  </>,
    name: "21.Sep.2021",
    info: <>
    <div className={Style['td-div']}>
      12.2%<progress className={Style['prg']} value="12.2" max="100"></progress>
    </div>
  </>
  },
  {
    classification: <p>Uranus</p>,
    sub: <>
    <img src={apple} alt="apple" /> &ensp;
    <img src={window} alt="window" />
  </>,
    name: "21.Sep.2021",
    info: <>
    <div className={Style['td-div']}>
      12.2%<progress className={Style['prg']} value="12.2" max="100"></progress>
    </div>
  </>
  },{
    classification: <p>Uranus</p>,
    sub: <>
    <img src={apple} alt="apple" /> &ensp;
    <img src={window} alt="window" />
  </>,
    name: "21.Sep.2021",
    info: <>
    <div className={Style['td-div']}>
      12.2%<progress className={Style['prg']} value="12.2" max="100"></progress>
    </div>
  </>
  },{
    classification: <p>Uranus</p>,
    sub: <>
    <img src={apple} alt="apple" /> &ensp;
    <img src={window} alt="window" />
  </>,
    name: "21.Sep.2021",
    info: <>
    <div className={Style['td-div']}>
      12.2%<progress className={Style['prg']} value="12.2" max="100"></progress>
    </div>
  </>
  },{
    classification: <p>Uranus</p>,
    sub: <>
    <img src={apple} alt="apple" /> &ensp;
    <img src={window} alt="window" />
  </>,
    name: "21.Sep.2021",
    info: <>
    <div className={Style['td-div']}>
      12.2%<progress className={Style['prg']} value="12.2" max="100"></progress>
    </div>
  </>
  },{
    classification: <p>Uranus</p>,
    sub: <>
    <img src={apple} alt="apple" /> &ensp;
    <img src={window} alt="window" />
  </>,
    name: "21.Sep.2021",
    info: <>
    <div className={Style['td-div']}>
      12.2%<progress className={Style['prg']} value="12.2" max="100"></progress>
    </div>
  </>
  },{
    classification: <p>Uranus</p>,
    sub: <>
    <img src={apple} alt="apple" /> &ensp;
    <img src={window} alt="window" />
  </>,
    name: "21.Sep.2021",
    info: <>
    <div className={Style['td-div']}>
      12.2%<progress className={Style['prg']} value="12.2" max="100"></progress>
    </div>
  </>
  },
];

export default tableData;