import React, { useState, useRef } from "react";
import axios from "axios";
import "./input.css";
import App from "../App";
function Input() {
  const [getinput, setgetinput] = useState("");
  const iValue = useRef(null);
  const [apiData , setApiData] = useState(null);
  const callApi = async (e) => {
    e.preventDefault();
    console.log(getinput);
    // console.log(iValue.current.value);
    let cityName = iValue?.current?.value;
    const BASE_URL = "https://api.weatherapi.com/v1/forecast.json?key=";
    const APIKEY = "09e23a81c17e423093b64454230607";
    try {
      const res = await axios.get(`${BASE_URL}${APIKEY}&q=${cityName}&aqi=no`);
      setApiData(res)
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  function onchangeHandler(e) {
    setgetinput(e.target.value);
  }
  return (
    <>
      <div className="container sticky-top">
        <div className="search-bar" id="searchBar">
          <input
            className="form-control rounded"
            type="text"
            id="searchBar"
            maxLength={20}
            minLength={2}
            required
            onChange={onchangeHandler}
            ref={iValue}
          />
          <button type="button" className="btn btn-primary" onClick={callApi}>
            Check!
          </button>
        </div>
      </div>
      <App wheatherdata ={apiData}></App>
    </>
  );
}

export default Input;
