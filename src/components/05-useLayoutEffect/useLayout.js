import React, { useLayoutEffect, useRef } from 'react';
import './layout.css'
import { useFetch } from '../hooks/useFetch';
import { useCouter } from '../01-useState/hooks/useCounter';

export const Layout = () => {
    const { counter, increment } = useCouter(1)
    
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    const { author, quote } = !!data && data[0]
    const pTag = useRef()
    useLayoutEffect( () =>{
        console.log(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <>
            <h1> Layout Effect </h1>
            <hr />

            <blockquote className="sblockquote text-right">
                <p 
                className="mb-0"
                ref={pTag}
                > 
                {quote}</p>
                <footer className="blockquote-footer"> {author}</footer>
            </blockquote>

            <button className="btn btn-primary" onClick={increment}>Siguiente Quotes</button>

        </>
    );
};
