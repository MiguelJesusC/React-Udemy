import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer'
import {useForm} from '../hooks/useForm'
import './styles.css'

const init = () =>{

    return JSON.parse(localStorage.getItem('todos')) || []
  
}

const TodoApp = () => {

    const [todos, dispacht ] = useReducer(todoReducer, [] , init)
     
    
    const [{description}, handleInputChange, reset] = useForm({
        description:''
    })

    useEffect( () =>{
        localStorage.setItem('todos',JSON.stringify( todos ))
    }, [todos])

    const handleDelete = (id) => {
        
        const action = {
            type: 'delete',
            payload : id
        }

        dispacht(action)
    }

    const handleToogle = (todoId) =>{
        console.log(todoId)
        dispacht({
            type:'toogle',
            payload: todoId
        })
    }
    // if (description.trim().length <= 1) {
    //     return;
    // }

    const handleSubmit = (e) =>{

        e.preventDefault()
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispacht(action)
        e.target.reset()
        
    }

    return (
        <>
            <h1> toDoApp {todos.length}</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((e, i) => (
                                <li
                                    key={e.id}
                                    className="list-group-item"
                                >
                                    <p className={`${ e.done && 'complete' }`} 
                                    onClick={ () =>{ handleToogle(e.id)}}
                                    >
                                    {i + 1}. {e.desc}
                                    </p>
                                    <button className="btn btn-danger" onClick={ () =>{
                                        handleDelete( e.id)
                                    }} >Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="col-5">
                        <h4>Agredar toDo</h4>
                        <hr />

                        <form onSubmit={handleSubmit}> 
                            <input 
                            type="text" name="description" placeholder="Aprender..." autoComplete="off" className="form-control" onChange={handleInputChange}
                            />                            

                            <button className="btn btn-outline-primary mt-1 btn-block">
                                Agregar
                            </button>
                        </form>
                </div>
            </div>
        </>
    );
};

export default TodoApp;