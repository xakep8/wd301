import React from "react";
import { useNavigate } from "react-router-dom";

const Logout=()=>{
    const navigate=useNavigate();
    
    React.useEffect(()=>{
        localStorage.removeItem('authToken');
        localStorage.removeItem('id');
        navigate('/');
    },[]);

    return(
        <div></div>
    );
}
export default Logout;