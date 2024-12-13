import { createStore } from 'redux'

const initialState = {
    task : [ ],
}

// added task 
/*

*/
const ADD_TASK = 'task/add';
const ADD_API_TASK =   'task/add/api'
const DELETE_TASK  = 'task/delete'

const taskReduder = ( state = initialState,action) => {
    switch(action.type ){
        case ADD_TASK:
            return  { 
                ...state,
                task : [...state.task,action.payload]
            }
        case DELETE_TASK:
            return { 
                ...state,
                task : state.task.filter((currentTask,id)=>(
                    id !== action.payload
                ))
            }
        case ADD_API_TASK:
            return{
                ...state,
                task : [ ...state.task,action.payload]
            }
        default :
        return state
    }

}


//? Step 2 : Create the Redux Store using the reducer 
export const store = createStore(taskReduder)



console.log(store.getState());




//? step 5 : create an action creator
const addTask = (data) => {
    return {
        type : ADD_TASK, payload : data
    }
}

store.dispatch(addTask('buy tea and coffee'))
console.log(store.getState());

const deleteTask = (id) => {
    return {
        type : DELETE_TASK,
        payload : id
    }
}

const addNewTask = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const task = await res.json()
            console.log(task)
            console.log(store.getState())
            dispatch({type :ADD_API_TASK, payload : task })

        } catch (error) {
            console.log(error)
        }
    }
}

export { addTask,deleteTask}