import React, { createContext, useContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext  = createContext();

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(false);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);