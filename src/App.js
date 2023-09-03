import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";

function App(props) {
  const { wheatherdata } = props;
  const [data, setData] = useState([]);
  const [currentdata, setCurrentdata] = useState([]);
  // console.log(wheatherdata)
  useEffect(() => {
    if (wheatherdata) {
      setData((prevData) => [wheatherdata, ...prevData]);
    }
  }, [wheatherdata]);

  useEffect(() => {
    if (navigator.geolocation) {
      console.log("IF navigation is enabled");
      navigator.geolocation.getCurrentPosition(async (postion) => {
        // console.log(postion.coords.latitude)
        // console.log(postion.coords.longitude)
        const BASE_URL = "https://api.weatherapi.com/v1/forecast.json?key=";
        const APIKEY = "09e23a81c17e423093b64454230607";
        try {
          const res = await axios.get(
            `${BASE_URL}${APIKEY}&q=${postion.coords.latitude},${postion.coords.longitude}&aqi=no`
          );
          setCurrentdata(res);
          // console.log(res)
        } catch (e) {
          console.log("API CATCH ERROR");
          console.log(e);
        }
      });
    } else {
      console.log("Location Not Found");
    }
  }, []);
  // console.log(currentdata)
  return (
    <>
      <div className="container-fluid px-1 px-md-4 mx-auto">
        {data.map((item, index) => (
          <Card item={item} key={index}></Card>
        ))}

        <Card item={currentdata}></Card>
      </div>
    </>
  );
}

export default App;
