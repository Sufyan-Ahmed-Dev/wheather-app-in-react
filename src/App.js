import { useState, useEffect } from "react";
import "./App.css";

function App(props) {
  const { wheatherdata } = props;
  const [data, setData] = useState([]);
  // console.log(wheatherdata)
  useEffect(() => {
    if (wheatherdata) {
      setData((prevData) => [wheatherdata , ...prevData]);
    }

  }, [wheatherdata]);
  return (
    <>
      <div className="container-fluid px-1 px-md-4 mx-auto">

        {data.map((item, index) => (
          <div className="row d-flex justify-content-center px-3" key={index}>
            <div className="card animate-card item-center ">

              <h2 className="ml-auto mr-4 mt-3 mb-0">
                {item?.data?.location?.name}
              </h2>
              <p className="ml-auto mr-4 mb-0 med-font">
                {item?.data?.current?.condition?.text}
              </p>
              <h1 className="ml-auto mr-4 large-font">
                {item?.data?.current?.temp_c}
                &#176;
              </h1>
              <p className="time-font mb-0 ml-4 mt-auto">
                {item?.data?.location?.country}

                {/* <span className="sm-font">AM</span> */}
              </p>
              <div className="weather-image d-none d-sm-block">
                <img src={`https:${item?.data?.current?.condition?.icon}`} alt="Weather" />
              </div>
              <p className="ml-4 mb-4">
                {item?.data?.location?.localtime}
              </p>

            </div>
          </div>

        ))}
      </div>
    </>
  );
}

export default App;
