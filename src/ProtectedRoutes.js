import React from "react";
import { Outlet,Navigate } from "react-router-dom";

function ProtectedRoutes(){
    const get_Item = localStorage.getItem("authenticated");
    return get_Item ? <Outlet /> : <Navigate to={"/login"}/>;
    
}
 export default ProtectedRoutes;