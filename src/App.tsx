import {ChangeEvent, FormEvent, useState} from "react";


function App() {

    const task1: Task = {id:1,description: "tidy up",name:"peter", status: "Open"}

    const [taskList, setTaskList] = useState<Task[]>([task1])
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")


    function handleDescriptionInput(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value)
    }

    function handleNameInput(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }

    function addTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTaskList([...taskList, {
            id: taskList.length + 1,
            name:name,
            description: description,
            status: "OPEN"
        }])
        setDescription("")
        setName("")
        console.log("das ist die description" + description)
    }

    return (
        <>
            <form onSubmit={addTask}>
            <h1>Add Task</h1>
            <input onInput={handleDescriptionInput} value={description} placeholder={"description"}/>
            <input onChange={handleNameInput} value={name} placeholder={"name"}/>
            <button>Add</button>
            </form>

            {taskList.map(task => <div key={task.id}>
                <h3>{task.description+ " " +task.name}</h3>
                <p>{task.status}</p>

            </div>)}
        </>
    )
}

export default App
