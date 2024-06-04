import { useState } from "react";
import "./searchBar.scss";
import { TbHomeSearch } from "react-icons/tb";

function SearchBar() {
  const types = ["rent", "buys"];

  const [query, setQuery] = useState({
    type: "rent",
    location: "",
    minPrice: "",
    maxPrice: "",
  });

  // handle user interaction that changes the search type
  const handleSwitchType = (val) => {
    //spread syntax is used to create a new object based on existing query object
    // the spread syntax copies all properties from query into the new object
    setQuery({
      ...query,
      type: val,
    });
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
          className={query.type === type ? "active": ""} 
          onClick={() => handleSwitchType(type)} 
          key={type}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          min={0}
          max={10000}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          min={0}
          max={10000000}
        />
        <button>
          <TbHomeSearch size={28}/>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
