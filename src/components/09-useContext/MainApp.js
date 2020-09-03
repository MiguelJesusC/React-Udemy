import React, { useState } from 'react';
import AppRouter from './AppRouter';
import { UserContext } from './useContext';

const MainApp = () => {

  const [user, setUser] = useState({})

    return (
            <UserContext.Provider value={{
                user,
                setUser
            }}> 
                < AppRouter / >
            </UserContext.Provider>
    );
};

export default MainApp;