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

    setoninput(value);
    console.log("oninput", oninput);
  };
  const addperson = (per) => {
    setaddtolist([...addtolist, per]);
  };
  console.log("add person", addtolist);
  return (
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
                <li key={per.id} onClick={() => addperson(per)}>
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
