import React, { useCallback, useEffect, useState } from "react";
const Pers = () => {
  const [persons, setPersons] = useState([]);
  const [onclickinput, setonclickinput] = useState(false);
  const [oninput, setoninput] = useState("");
  const [addToList, setAddToList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        // console.log("main data", data);
        setPersons(data);
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
  const addperson = (id) => {
    const findUser = persons.find((users) => users.id === id);
    const filteredUser = persons.filter((users) => users.id !== id);
    setPersons(filteredUser);
    setAddToList((prevState) => [...prevState, findUser]);
  };
  console.log("AddPerson", addToList);
  console.log("Persons", persons);
  const onClickDeleteFromAddToList = (id) => {
    const findUser = addToList.find((users) => users.id === id);
    const filteredData = addToList.filter((users) => users.id !== id);
    setAddToList(filteredData);
    setPersons((prevState) => [...prevState, findUser]);
  };
  //------
  //const deletefromaddlist = (deleted) => {
  // const deletedPerson = addtolist.find(
  // (addlistitem) => addlistitem.id === deleted
  // );
  // const adddeletefromaddlist = addtolist.filter(
  //   (select) => select.id !== deleted
  // );
  //  setaddtolist(adddeletefromaddlist);
  // setpersons((prevPersons) => [...prevPersons, deletedPerson]);
  //};
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
      {onclickinput &&
        persons.map((user, index) => {
          return (
            <div key={user.id}>
              <li key={user.id} onClick={() => addperson(user.id)}>
                {user.username}
              </li>
            </div>
          );
        })}
      <div>
        {addToList.map((users) => {
          return (
            <div key={users?.id}>
              <li key={users?.id}> {users.username}</li>
              <button onClick={() => onClickDeleteFromAddToList(users.id)}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Pers;
