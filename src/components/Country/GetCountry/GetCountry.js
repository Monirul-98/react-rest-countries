import React from "react";
import "./GetCountry.css";

const GetCountry = (props) => {
  //   console.log(props);
  const { name, population, area, region, flags } = props.country;
  return (
    <div className="country">
      <h2>Country name: {name.common}</h2>
      <img src={flags.png} alt="" className="flags" />
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

export default GetCountry;
