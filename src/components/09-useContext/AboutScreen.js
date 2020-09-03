import React, { useContext } from 'react';
import { UserContext } from './useContext';

const AboutScreen = () => {
    const {user, setUser} =useContext(UserContext)
    const handleLoginout = () => {
        setUser({})
    }
    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />
            <pre> 
            {
                JSON.stringify(user, null, 3)
            }
            </pre>

            <button className="btn btn-warning" onClick={ () =>{
                handleLoginout()
            }}> 
                Logout
            </button>
        </div>
    );
};

export default AboutScreen;