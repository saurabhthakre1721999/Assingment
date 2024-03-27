import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>I am Home</h1>
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
};

export default Home;
