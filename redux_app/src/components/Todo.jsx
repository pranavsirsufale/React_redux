import { useState } from "react"
import { useSelector , useDispatch} from "react-redux"
import { addTask } from "../store/store"

const Todo = () => {
    const [ task, setTask] = useState([''])
    const data = useSelector((state)=> (state.task))
    console.log(data)
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setTask(e.target.value)
        console.log(task)
    }

    const handleAddUser = () => {
        if (!task){
            return
        }
        dispatch(addTask(task))
        setTask('')
    }


    const handleRemove = (id) => {

    }

    return (
        <>
        <h1> Hii there ! , Pranav Sirsufale</h1>
        <input type="text" value={task} onChange={(e)=>handleInput(e)} />
        <button  onClick={handleAddUser} > Add task </button>
        <ul className="something">
        { 
            data.map((task,index)=> (
                <li key={index} >
                    <p> {task} </p>
                    
                <p><button onClick={()=>handleRemove(index)} > Remove </button>  </p>
                </li>
            ))
        }
        </ul>
        </>
    )
}

export default Todo