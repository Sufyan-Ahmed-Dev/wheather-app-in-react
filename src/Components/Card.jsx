import React from 'react'
import "./Card.css"
export default function Card(item) {
    console.log(item.item.length)
    return (
        <>
        {(item.item.length === 0) ? <p className='text-center fw-bold' > No Data</p> :  <div className="row d-flex justify-content-center px-3" >
                <div className="card animate-card item-center ">

                    <h2 className="ml-auto mr-4 mt-3 mb-0">
                        {item?.item?.data?.location?.name}
                        {/* {"NODATA"} */}
                    </h2>
                    <p className="ml-auto mr-4 mb-0 med-font">
                        {item?.item?.data?.current?.condition?.text}
                    </p>
                    <h1 className="ml-auto mr-4 large-font">
                        {(item.item.length === 0) ? "No Data" : item?.item?.data?.current?.temp_c}

                        &#176;
                    </h1>
                    <p className="time-font mb-0 ml-4 mt-auto">
                        {item?.item?.data?.location?.country}

                        {/* <span className="sm-font">AM</span> */}
                    </p>
                    <div className="weather-image d-none d-sm-block">
                        <img src={`https:${item?.item?.data?.current?.condition?.icon}`} alt="Weather" />
                    </div>
                    <p className="ml-4 mb-4">
                        {item?.item?.data?.location?.localtime}
                    </p>

                </div>
            </div>} 
           


        </>
    )
}
