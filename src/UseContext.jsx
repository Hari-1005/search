import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState({name:"exmaple name"})
    const updateName = (newName) => {
        setUser({name:newName})
    }

    return <UserContext.Provider value={{user, updateName}}>
        {children}
    </UserContext.Provider>
}

export {UserContext, UserProvider}