import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";

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
        <Card item = {item} key={index}></Card>

        ))}
      </div>
    </>
  );
}

export default App;
