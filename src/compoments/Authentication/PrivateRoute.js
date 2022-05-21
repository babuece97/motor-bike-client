import React from 'react';
import {Navigate,useLocation} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const user= false;
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
      }
    return children;
};

export default PrivateRoute;

// FRONTEND 
// Navigate = where to go ?
// location= After login  page  will be the loaded on the same place ;
// replace= NOT to  go back to previous page