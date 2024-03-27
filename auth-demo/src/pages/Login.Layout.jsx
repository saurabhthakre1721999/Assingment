import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth.Context";

const Login = () => {
  const { onSaveSession } = useAuth();
  const navigate = useNavigate();

  const onSuccessfullLogin = () => {
    onSaveSession({
      userToken: "_wer__wedr4fgw@sdf",
      refreshUserToken: "__234UUi#$$FGFDS",
      userName: "Rahul Pancholi",
      userEmail: "rahul.pancholi@google.com",
      designation: "Level 6 Engineer",
      address: "1600 Amphitheatre Parkway in Mountain View, California",
      city: "California",
      country: "USA",
    });

    navigate("/");
  };

  return (
    <div>
      <h1>I am Login</h1>
      <button onClick={onSuccessfullLogin}>Fake Login</button>
    </div>
  );
};

export default Login;
