import { useState, useEffect,useRef } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({data: null, error: null, loading: true})
    const isMounted = useRef(true);

    useEffect( () =>{

        return() =>{
            isMounted.current = false;
        }
    }, [])



    useEffect( () =>{
        setState({
            data: null, error: null, loading: true
        })
        fetch( url)
        .then( resp => resp.json())
        .then(data => {

            if(isMounted.current){
                setState({
                    loading: false,
                    error:null,
                    data
                })
            }else{
                console.log('No se llamo al setState')
            }
        })
    }, [url])
    return state
};

