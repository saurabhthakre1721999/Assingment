import { useEffect } from "react";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    console.log(" about is mounted");
    return () => {
      console.log("about is unmount");
    };
  }, []);
  return (
    <div>
      {" "}
      <h1> welcome to about</h1> <Link to="/contact">go to contat </Link>{" "}
      <Link to="/">go to home</Link>
    </div>
  );
};

export default About;
