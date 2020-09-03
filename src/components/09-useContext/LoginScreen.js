import React, { useContext } from 'react';
import { UserContext } from './useContext';

const LoginScreen = () => {
    const {setUser} = useContext(UserContext)
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button className="btn btn-primary" onClick={ () =>{
                setUser({
                    id:'123',
                    name:'Fernando'
                })
            }}> 
            Login
            </button>
        </div>
    );
};

export default LoginScreen;