import ReactDOM from "react-dom/client";
import Navigation from "./navigation/Navigation.Layout.jsx";
import AuthProvider from "./contexts/Auth.Context.jsx";

const Sample = () => (
  <div>
    <h1>Uday</h1>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider component={Sample}>
    <Navigation />
  </AuthProvider>
);
