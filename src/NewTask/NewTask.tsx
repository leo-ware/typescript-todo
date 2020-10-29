import React, {useState} from 'react'
import Plus from './plus.svg'
import './NewTask.css'

interface newTaskProps {
    addTask: (task: string) => void
}

const NewTask = (props: newTaskProps) => {
    const [input, setInput] = useState("")
    const add = (): void => {props.addTask(input); setInput("")}

    return (
        <div className={"NewTask"} onKeyPress={(e) => {if (e.key==='Enter'){add()}}}>
            <input className={"new-task-input"} type={"text"} onChange={(e) => {setInput(e.target.value)}} value={input} placeholder={"Add a task..."} />
            <img src={Plus} onClick={add} alt={"add item"} />
        </div>
    )
}

export default NewTask
