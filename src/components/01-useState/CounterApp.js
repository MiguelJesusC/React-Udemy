import React, { Fragment, useState } from 'react';
const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    })

    let {counter1, counter2} = state
    return (
        <Fragment>
            <h2> Counter {counter1} </h2>
            <h2> Counter {counter2} </h2>
            <hr />
            <button className="btn btn-primary" onClick={() =>{
                setState({
                    ...state,
                     counter1 : counter1 + 1
                })
            }}>Click me! </button>
        </Fragment>
    );
};

export default CounterApp;