import React, { useState, useEffect } from "react";

const Per = () => {
  const [persons, setPersons] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPersons, setSelectedPersons] = useState([]);

  // Simulate fetching data from an API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPersons(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log("inputge", inputValue);
  const handleItemClick = (selectedPerson) => {
    // Add selected person to the chip list
    setSelectedPersons([...selectedPersons, selectedPerson]);

    // Remove selected person from the available list
    setPersons((prevPersons) =>
      prevPersons.filter((person) => person.id !== selectedPerson.id)
    );

    // Clear the input field
    setInputValue("");
  };

  const handleChipRemove = (removedPerson) => {
    // Remove the chip from the selected list
    setSelectedPersons((prevSelected) =>
      prevSelected.filter((person) => person.id !== removedPerson.id)
    );

    // Add the removed person back to the available list
    setPersons((prevPersons) => [...prevPersons, removedPerson]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to filter..."
      />
      <hr />
      {persons.length && (
        <ul>
          {persons
            .filter((person) =>
              person.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((person) => (
              <li key={person.id} onClick={() => handleItemClick(person)}>
                {person.name}
              </li>
            ))}
        </ul>
      )}
      <div>
        {selectedPersons.map((selectedPerson) => (
          <div key={selectedPerson.id} className="chip">
            {selectedPerson.name}{" "}
            <span onClick={() => handleChipRemove(selectedPerson)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Per;
