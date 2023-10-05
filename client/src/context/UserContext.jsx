import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});
const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            setLoggedIn(true);
        }
    }, []);

    const loginUser = (user, authToken) => {
        setCurrentUser(user);
        localStorage.setItem('authToken', authToken);
        setLoggedIn(true);
    }

    const logoutUser = () => {
        setCurrentUser(null);
        localStorage.removeItem('authToken');
        setLoggedIn(false);
    }

    const addUser = (user) => {
        setCurrentUser(user);
        setLoggedIn(true);
    }

    return (
        <UserContext.Provider 
            value={{ currentUser, setCurrentUser, loggedIn, loginUser, logoutUser, addUser }}>
                {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }