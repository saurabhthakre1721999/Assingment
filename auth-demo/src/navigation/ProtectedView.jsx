import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/Auth.Context";
import { routesMap } from "./Navigation.Layout";

const ProtectedView = ({ children }) => {
  const { pathname } = useLocation();
  const { userProfile } = useAuth();

  console.log({ userProfile });

  if (pathname === routesMap.login && !userProfile) {
    return children;
  }

  if (pathname === routesMap.login && userProfile) {
    return <Navigate to={routesMap.root} replace={true} />;
  }

  if (!userProfile) {
    return <Navigate to={routesMap.login} replace={true} />;
  }

  return children;
};

export default ProtectedView;
