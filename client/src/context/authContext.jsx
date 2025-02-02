import {createContext, useEffect, useState} from "react";
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null )

    const login = async(inputs)=>{
        const res = await axios.post("http://localhost:8080/api/auth/login", inputs, {
            withCredentials: true, //  Permet d'envoyer le cookie d'auth
          })
        setCurrentUser(res.data);
    };

    const logout = async (inputs)=>{
        await axios.post("http://localhost:8080/api/auth/logout");
        setCurrentUser(null);
    };

    useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

};