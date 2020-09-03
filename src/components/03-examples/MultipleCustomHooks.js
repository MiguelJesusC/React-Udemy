import React from 'react';
import '../02-useEffect/effects.css'
import { useFetch } from '../hooks/useFetch';
import { useCouter } from '../01-useState/hooks/useCounter';

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCouter(1)
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {author, quote} = !!data && data[0]

    return (
        <>
            <h1> BreakingBad Quotes</h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="sblockquote text-right">
                            <p className="mb-0"> {quote}</p>
                    <footer className="blockquote-footer"> {author}</footer>
                        </blockquote>
                    )
            }

            <button className="btn btn-primary" onClick={increment}>Siguiente Quotes</button>

        </>
    );
};
