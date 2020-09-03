const initialState = [{
    id: 1,
    todo:'Comprar Pan',
    done: false
}]

const todoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar'){
        return[...state, action.payload]
    }

    return state
}

let toDos = todoReducer()

const newToDo = {
    id:2,
    todo:'Comprar leche',
    done:false
}

const agregarToDoAction = {
    type:'agregar',
    payload: newToDo
}

toDos = todoReducer (toDos,agregarToDoAction)

console.log(toDos)