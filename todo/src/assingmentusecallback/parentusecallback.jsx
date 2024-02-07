import React, { useEffect, useState } from "react";
import Childperson from "./childusecallback";
const Homeperson = () => {
  const [Allperson, SetAllPerson] = useState([]);
  const [SelectedId, SetSelectedId] = useState(false);
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
      <Childperson
        Allperson={Allperson}
        onclickhandler={clickonchild}
        SelectedId={SelectedId}
      />
    </>
  );
};
export default Homeperson;
