import './App.css';

function App(props) {

  const {wheatherdata} = props;
  console.log(wheatherdata)
  return (
    <>
      <div className="container-fluid px-1 px-md-4 mx-auto">
        <div className="row d-flex justify-content-center px-3">
          <div className="card animate-card">
            <h2 className="ml-auto mr-4 mt-3 mb-0">{(wheatherdata === null )? "City Name" : wheatherdata?.data?.location?.name}</h2>
            <p className="ml-auto mr-4 mb-0 med-font">{(wheatherdata === null) ? "condition" : wheatherdata?.data?.current?.condition?.text} </p>
            <h1 className="ml-auto mr-4 large-font">{(wheatherdata === null)? "temp_c":wheatherdata?.data?.current?.temp_c}&#176;</h1>
            <p className="time-font mb-0 ml-4 mt-auto">
              
              
              {(wheatherdata === null)? "Country" :                 
              wheatherdata?.data?.location?.country
              
              }
            
            
            
            {/* <span className="sm-font">AM</span> */}
            </p>
            <p className="ml-4 mb-4">{(wheatherdata === null)? "Country Time" :                 
              wheatherdata?.data?.location?.localtime
              
              }</p>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
