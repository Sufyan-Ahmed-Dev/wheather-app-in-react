import React from "react";
import "./input.css";
function Input() {
    const callApi = ()=>{
        alert("Calling API .....")
    }
  return (
    <>
      <div className="container sticky-top">
        <div className="search-bar" id="searchBar">
          <input
            type="search"
            className="form-control rounded"
            placeholder="City"
            aria-label="Search"
            aria-describedby="search-addon"
            id="searchInput"
          />
          <button type="button" className="btn btn-primary" onClick={callApi}>
            Check!
          </button>
        </div>
      </div>
    </>
  );
}

export default Input;
