import React, { useEffect, useState } from "react";
import Childperson from "./childusecallback";
const Homeperson2 = () => {
  const [Allperson, SetAllPerson] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        SetAllPerson(data);
      })
      .catch((err) => {
        console.log("error to fetch data");
      });
  }, []);
  const clickonchild = (id) => {
    SetSelectedId(id);
  };

  console.log("in out useeffect", Allperson);
  return (
    <>
      <div>
        {Allperson.map((per) => {
          return (
            <Childperson
              onclickhandler={clickonchild}
              key={per.id}
              person={per}
            />
          );
        })}
      </div>
    </>
  );
};
export default Homeperson2;
