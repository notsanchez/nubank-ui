import React from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const user = localStorage.getItem("user")
    const data = localStorage.getItem("data")

    return(
        <AuthContext.Provider value={{ user, data }}>
            {props.children}
        </AuthContext.Provider>
    );
};