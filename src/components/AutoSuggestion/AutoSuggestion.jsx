import React, { useEffect, useState } from "react";
import "./AutoSuggestion.css";

function AutoSuggestion() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        console.log("country-->", countryNames);
        setCountries(countryNames);
      });
  }, []);

  const handleInputChange = (e) => {
    let value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      let filterCountries = countries.filter((country) => {
        return country.toLowerCase().startsWith(value.toLowerCase());
      });
      setSuggestions(filterCountries);
    } else {
      setSuggestions([]);
    }
  };

  //   const handleInputChange = (event) => {
  //     const value = event.target.value;
  //     setQuery(value);

  //     if (value.length > 1) {
  //       const filtered = countries.filter((country) =>
  //         country.toLowerCase().startsWith(value.toLowerCase())
  //       );
  //       setSuggestions(filtered);
  //     } else {
  //       setSuggestions([]);
  //     }
  //   };

  const handleSelect = (country) => {
    setQuery(country);
    setSuggestions([]);
  };
  return (
    <div className="container">
      <div className="autocomplete-container">
        <input
          type="text"
          value={query}
          placeholder="Search"
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((country, index) => (
              <li key={index} onClick={() => handleSelect(country)}>
                {country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AutoSuggestion;
