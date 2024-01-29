import { Link } from "react-router-dom";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    console.log(" contact is mounted");
    return () => {
      console.log("contact is unmount");
    };
  }, []);
  return (
    <div>
      {" "}
      <h1> welcome to contact</h1>
      <Link to="/">go to home </Link> <Link to="/about">go to about </Link>
    </div>
  );
};

export default Contact;
