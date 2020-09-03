import React, { useState } from 'react';
import '../02-useEffect/effects.css'
import { useCouter } from '../01-useState/hooks/useCounter';
import Small from './Small';
const Memorize = () => {

    const{counter, increment } = useCouter( 10 )
    const [show, setShow] = useState(true)


    return (
        <div>
            <h1>Counter:  <Small value={counter}/> </h1>
            <hr />
            <button className="btn btn-primary" onClick={increment}> Add!</button>
            <button className="btn btn-outline-primary ml-3" onClick={
                () =>{
                    setShow( !show)
                }
            }> Show/Hide { JSON.stringify ( show )}</button>
        </div>
    );
};

export default Memorize;