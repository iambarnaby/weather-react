import { useState } from "react";

const Searchbar = ({ setCityName }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(city);
  };

  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <input
        id="search-input"
        className="search-bar"
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
