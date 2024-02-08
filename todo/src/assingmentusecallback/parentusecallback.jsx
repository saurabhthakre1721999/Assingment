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
  const clickonchild = useCallback(
    (id) => {
      SetAllPerson((prev) => {
        return prev.map((item) => {
          if (item.id === id && item.hasOwnProperty("background")) {
            console.log("backgroundcolor is none now");
            const { background, ...other } = item;
            return other;
          } else if (item.id === id) {
            console.log("backgroundcolor is red now");
            return { ...item, background: "red" };
          }
          return item;
          SetSelectedid(item.id);
        });
      });
    },
    [Selectedid]
  );

  console.log("in out useeffect", Allperson);
  return (
    <>
      <Childperson Allperson={Allperson} onclickhandler={clickonchild} />
    </>
  );
};
export default Homeperson;
