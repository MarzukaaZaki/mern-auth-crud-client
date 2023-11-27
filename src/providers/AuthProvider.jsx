import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
       if(!user){
        axios.get('https://crud-server-dczzcxppv-zakimarzuka-gmailcom.vercel.app/profile')
        .then(({data}) =>{
            setUser(data);
        })
       }
    },[])
    
    return (
       <AuthContext.Provider value={{user, setUser}}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;