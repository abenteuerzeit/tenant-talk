import { useState, useEffect, createContext, useContext } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load user data from cookie when app loads
    useEffect(() => {
        const storedUserData = Cookies.get('user');
        if (storedUserData) {
            try {
                const parsedUserData = JSON.parse(storedUserData);
                setUser(parsedUserData);
            } catch (err) {
                console.error('Error parsing user data:', err);
            }
        }
    }, []);

    // Update user data in cookie whenever it changes
    useEffect(() => {
        if (user) {
            Cookies.set('user', JSON.stringify(user));
        } else {
            Cookies.remove('user');
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
