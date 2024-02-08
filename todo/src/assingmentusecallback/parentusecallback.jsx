import React, { useEffect, useState } from "react";
import Childperson from "./childusecallback";
const Homeperson = () => {
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
    SetAllPerson((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, background: "red" };
        }
        return item;
      });
    });
  };

  console.log("in out useeffect", Allperson);
  return (
    <>
      <Childperson Allperson={Allperson} onclickhandler={clickonchild} />
    </>
  );
};
export default Homeperson;
