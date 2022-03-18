import React, { useEffect, useState } from "react";
import GetCountry from "./GetCountry/GetCountry";
import "./Country.css";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Let's visit Countries: {countries.length}</h1>
      <div className="countries-container">
        {countries.map((country) => (
          <GetCountry country={country} key={country.cca3}></GetCountry>
        ))}
      </div>
    </div>
  );
};

export default Country;
