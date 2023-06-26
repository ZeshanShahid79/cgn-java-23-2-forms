import {ChangeEvent, useState} from "react";


function App() {
    const task1: Task = {id:1,description: "tidy up", status: "Open"}
    const [taskList, setTaskList] = useState<Task[]>([task1])
    const [description, setDescription] = useState("")


    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value)
    }

    function addTask() {
        setTaskList([...taskList, {
            id: taskList.length + 1,
            description: description,
            status: "OPEN"
        }])
    }

    return (
        <>

            <h1>Add Task</h1>
            <input onInput={handleInput}/>
            <button onClick={addTask}>Add</button>

            {taskList.map(task => <div key={task.id}>
                <h3>{task.description}</h3>
                <p>{task.status}</p>
            </div>)}
        </>
    )
}

export default App
