import React from 'react';
import './styles/counter.css' 
import { useCouter } from './hooks/useCounter';

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCouter(100); 

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            < hr />
            <button className="btn btn-primary" onClick={ () => increment(2)}> Add!  </button>
            <button className="btn btn-danger" onClick={ () => reset() }> Reset!  </button>
            <button className="btn btn-secondary" onClick={ () => decrement(2)}> Less! </button>
        </>
    );
};

export default CounterWithCustomHook;