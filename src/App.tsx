import { useState, useRef } from "react";
import clsx from 'clsx';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import ReactResizeDetector from "react-resize-detector";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const myRef = useRef();

  const [options, setOptions] = useState({
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  });

  const [size, setSize] = useState({height: 200, width: 0});

  const onResizeChart = (width: any, height: any) => {
    console.log(`chart size: ${width}x${height}`);
    setSize({ width: Math.floor(width), height: Math.floor(height) });
    myRef?.current?.chart.setSize(width, height);
  };

  return (
    <>
      <div className="appContainer">
        <div className="viewport">
          <div className="container">
            <div className={clsx("barMenu", {["open"]: open})}>Collapsed element</div>
            <div className="wrapper">
              <div className="content">
                <HighchartsReact
                  highcharts={Highcharts}
                  ref= {myRef}
                  options={options}
                  immutable={false}
                  constructorType={"chart"}
                  containerProps={{ style: { minWidth: size.width, height: "100%" } }}
                  width="100%"
                  height={300}
                />
                <ReactResizeDetector
                  handleWidth
                  handleHeight
                  onResize={onResizeChart}
                />
              </div>
            </div>
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
