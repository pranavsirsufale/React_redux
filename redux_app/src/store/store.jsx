import { createStore } from 'redux'


const initialState = {
    task : [ ],
}

const ADD_TASK = 'task/add';
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
        default :
        return state
    }

}


//? Step 2 : Create the Redux Store using the reducer 
export const store = createStore(taskReduder)



console.log(store.getState());



