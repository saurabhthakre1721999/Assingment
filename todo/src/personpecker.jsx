import React, { useCallback, useEffect, useState } from "react";
const Person = () => {
  const [persons, setpersons] = useState([]);
  const [onclickinput, setonclickinput] = useState(false);
  const [oninput, setoninput] = useState("");
  const [addtolist, setaddtolist] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        console.log("main data", data);
        setpersons(data);
      })
      .catch((err) => {
        console.log(" eror ", err);
      });
  }, []);
  //-----------------------------------------------oclick input bar---------------------------------------------
  const onclickinputbar = () => {
    setonclickinput(true);
  };
  //-----------------------------------------------user input---------------------------------------------
  const oninputvalue = (e) => {
    const { value } = e.target;
    value("");
    setoninput(value);
    console.log("oninput", oninput);
  };
  const addperson = (id) => {
    setaddtolist([...addtolist]);
  };
  console.log("person add list", addtolist);
  return (=
    <div>
      <input
        type="text"
        id=""
        name="name"
        value={oninput}
        onClick={onclickinputbar}
        onChange={oninputvalue}
      />
      <hr />
      {onclickinput && (
        <div>
          <ul>
            {persons.map((per, index) => {
              return (
                <li key={persons.id} onClick={addperson(id)}>
                  {per.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Person;
