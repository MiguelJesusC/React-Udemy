import React, { useState, useMemo } from 'react';
import '../02-useEffect/effects.css'
import { useCouter } from '../01-useState/hooks/useCounter';


const MemoHook = () => {

    const { counter, increment } = useCouter(200)
    const [show, setShow] = useState(true)

    const procesoPesado = (iteraciones) => {
        for (let i = 0; i < iteraciones; i++) {
            console.log('Ahi vamos....')
        }

        return `${iteraciones} iteraciones realizadas.`
    }

    const memoProcesoPesado = useMemo( ()=>procesoPesado(counter),[counter])

    return (
        <div>
            <h1>MemoHook papa! </h1>
            <h3>Counter:  <small> {counter} </small> </h3>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button className="btn btn-primary" onClick={increment}> Add!</button>
            <button className="btn btn-outline-primary ml-3" onClick={
                () => {
                    setShow(!show)
                }
            }> Show/Hide {JSON.stringify(show)}</button>
        </div>
    );
};

export default MemoHook;