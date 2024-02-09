import React, { useCallback, useEffect, useState } from "react";

import Childperson2 from "./newchildusecallback";

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
  const clickonchild = useCallback((id) => {
    SetAllPerson((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          item.isActive = !item.isActive;
        }
        return item;
      });
    });
  }, []);

  console.log(" parent render", Allperson);
  return (
    <>
      {Allperson.map((per) => {
        return (
          <Childperson2
            key={per.id}
            id={per.id}
            active={per.isActive}
            name={per.name}
            background={per.background}
            onclickhandler={clickonchild}
          />
        );
      })}
    </>
  );
};
export default Homeperson2;
