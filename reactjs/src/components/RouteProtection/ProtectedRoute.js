import React, {useEffect, useState} from "react";
import {Route, Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export const ProtectedRoute = ({component: Component,...rest}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    function checkIfIsAuthenticated(){
        return isAuthenticated;
    }

    useEffect(() => {

        let token = Cookies.get("Authorization");

        if(token != undefined){
            let tokenExpiration = jwt_decode(token).exp;
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
                setIsAuthenticated(false)
            }else{
                setIsAuthenticated(true)
            }
        } else {
            setIsAuthenticated(false)
        }
        // eslint-disable-next-line
    }, [])

    if(isAuthenticated === null){
        return <></>
    }

    return (
        <Route {...rest} render={props =>
            !isAuthenticated ? (
                <Redirect to='/login'/>
            ) : (
                <Component {...props} />
            )
        }
        />
    );
};