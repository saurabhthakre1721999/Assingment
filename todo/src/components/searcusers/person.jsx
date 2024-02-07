import React, { useMemo, useEffect, useState } from "react";
const Personfilter = () => {
  const [Product, Setproduct] = useState([]);
  const [Search, SetSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        console.log("main data", data);
        Setproduct(data);
        console.log(Product);
      })
      .catch((err) => {
        console.log("  Data not eror  ", err);
      });
    console.log("USE EFFECT RUN ");
  }, []);
  console.log("component is render");

  const filterdata = useMemo(() => {
    return Product.filter((per) => {
      return per.name.toLowerCase().includes(inputvalue.toLowerCase());
    });
  }, [Product, Search]);

  //-----------------------------------------------oclick input bar---------------------------------------------

  const OnInputChang = (e) => {
    const inputvalue = e.target.value;
    return inputvalue;
    console.log(Search);
  };
  return (
    <>
      <div>
        <input type="text" name="" id="" onChange={OnInputChang} />
      </div>
      <div>
        {filterdata.map((per) => {
          return <div key={per.id}> {per.username}</div>;
        })}
      </div>
    </>
  );
};
export default Personfilter;
