import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";
import Loading from "./Loading/Loading";

const RequireAdmin = ({ children }) => {
   const [user, loading] = useAuthState(auth);
   const [admin, adminLoading] = useAdmin(user);

   if (loading || adminLoading) {
      return <Loading></Loading>;
   }

   if (!user || !admin) {
      return <Navigate to="/dashboard" />;
   }

   return children;
};

export default RequireAdmin;
