import React, { useState } from "react";

function SearchInLis() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grapes" },
    { id: 5, name: "Mango" },
  ]);
  const [showfruits, setShowFruits] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const searchedFruits = fruits.filter((fruits) => {
    return fruits.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const onFocusShowFruits = () => {
    if (!showfruits) {
      setShowFruits(true);
    }
  };
  const onBlurHideFruits = () => {
    setShowFruits(false);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="userInput"
          value={searchInput}
          onChange={handleOnChange}
          onFocus={onFocusShowFruits}
          onBlur={onBlurHideFruits}
        />
      </div>
      {showfruits &&
        searchedFruits.map((fruits) => <li key={fruits.id}>{fruits.name}</li>)}
    </div>
  );
}

export default SearchInLis;
