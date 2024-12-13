import { useState } from "react"
import { useSelector , useDispatch} from "react-redux"
import { addTask ,deleteTask , addNewTask} from "../store/store"

const Todo = () => {
    const [ task, setTask] = useState([''])
    const data = useSelector((state)=> (state.task))
    console.log(data)
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setTask(e.target.value)
        console.log(task)
    }

    const handleAddUser = (e) => {
        e.preventDefault()
        if (!task){
            return
        }
        dispatch(addTask(task))
        setTask('')
    }

    const handleAddUserApi = (e) => {
        e.preventDefault()
        dispatch(addNewTask())
    }


    const handleRemove = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <>
        <div className="container" >
            <div className="todo-app" >
                <h1 className="fa-regular fa-pen-to-square" >
                    <i> To-do List</i>
                </h1>
                <div className="row" >
                            <h1> Hii there ! , Pranav Sirsufale</h1>
                        <form onSubmit={(e)=>(e.preventDefault())} >

                            <input type="text"  id="input-box" 
                            placeholder="add a new task"
                            value={task}
                            onChange={(e)=>handleInput(e)}
                            />
                            <button  onClick={(e)=>handleAddUser(e)} > Add Task </button>


                            <button onClick={(e)=>handleAddUserApi(e)}> Add an API Task</button>

        {/* <input type="text" value={task} onChange={(e)=>handleInput(e)} />
        <button  onClick={handleAddUser} > Add task </button> */}
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

                        </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo