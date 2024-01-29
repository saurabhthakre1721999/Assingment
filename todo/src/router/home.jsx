import { Link } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    console.log("Home is mounted");

    return () => {
      console.log("Home is Unmounted");
    };
  }, []);
  return (
    <div>
      {" "}
      <h1> welcome to home</h1>
      <Link to="/contact">go to contat </Link>{" "}
      <Link to="/about">go to about </Link>
    </div>
  );
};

export default Home;
