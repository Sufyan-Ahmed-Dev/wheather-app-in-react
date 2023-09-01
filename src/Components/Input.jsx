import React, { useState, useRef } from "react";
import axios from "axios";
import "./input.css";
import App from "../App";
function Input() {
  let iValue = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [err, setErr] = useState("");
  const [isloader, setIsloader] = useState(false);
  const callApi = async (e) => {
    e.preventDefault();
    // console.log(getinput);
    // console.log(iValue.current.value);
    let cityName = iValue?.current?.value;
    const BASE_URL = "https://api.weatherapi.com/v1/forecast.json?key=";
    const APIKEY = "09e23a81c17e423093b64454230607";
    try {
      if (cityName === "") {
        setErr("City Name Required!");
      } else {
        setIsloader(true);
        const res = await axios.get(
          `${BASE_URL}${APIKEY}&q=${cityName}&aqi=no`
        );
        setApiData(res);
        setIsloader(false);
        iValue.current.value = "";
        setErr("");
      }

      // console.log(res);
    } catch (e) {
      setIsloader(true);
      console.log(e.response.data.error.message);
      setErr(e.response.data.error.message);
      setIsloader(false);
    }
  };
  return (
    <>
      <div className="container-fluid sticky-top">
      <form onSubmit={callApi}>
        <div className="search-bar" id="searchBar">
          <input
            className="form-control rounded"
            placeholder="Enter City Name"
            type="text"
            id="searchBar"
            maxLength={20}
            minLength={2}
            required
            ref={iValue}
          />
          {isloader === true ? (
            <button type="button" className="btn btn-dark">
             <div class="spinner-border text-light" role="status">
              <span class="sr-only"></span>
            </div>
          </button>          
          ) : (
            <button type="button" className="btn btn-dark" onClick={callApi}>
              Check!
            </button>
          )}
        </div>
        </form>
      </div>
      <p className="text-danger text-center fw-bold">{err}</p>
      <App wheatherdata={apiData}></App>
    </>
  );
}

export default Input;
