import React, { useCallback, useEffect, useState } from "react";
import Childperson from "./childusecallback";
const Homeperson = () => {
  const [Allperson, SetAllPerson] = useState([]);
  const [Selectedid, SetSelectedid] = useState([]);
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
        if (item.id === id) return;
        {
          item.isActive = !isActive;
          console.log("ITEM", item);
        }
        return item;
      });
    });
  }, []);

  console.log(" parent render", Allperson);
  return (
    <>
      <Childperson Allperson={Allperson} onclickhandler={clickonchild} />
    </>
  );
};
export default Homeperson;
