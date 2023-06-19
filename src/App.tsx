import { useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState({
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  });

  return (
    <>
      <div className="appContainer">
        <div className="viewport">
          <div className="container">
            {open ? <div className="barMenu">Collapsed element</div> : null}
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              immutable={false}
              containerProps={{ style: { width: "100%" } }}
            />
          </div>
          <button className="openButton" onClick={() => setOpen(() => !open)}>
            open
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
