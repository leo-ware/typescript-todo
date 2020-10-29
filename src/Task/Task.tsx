import React from 'react'
import Check from './check.svg'
import X from './x.svg'
import {ToastsStore} from "react-toasts";
import './Task.css'

interface taskInterface {
    title: string;
    kill: () => void;
    selected: boolean;
    incrementSelected: () => void;
    decrementSelected: () => void;
    onSelect: () => void;
}

const completionMessage = () => {
    const vibes = [
        "You did it!!",
        "You're a hero ⚡",
        "Chillin like a villin 😎",
        "Kapow!",
        "Wow",
        "Incredible"
    ]
    ToastsStore.success(vibes[Math.floor(Math.random() * vibes.length)])
}

const Task = (props: taskInterface) => {
    const onKeyPress = () => {}
    return (
        <div onKeyPress={onKeyPress} onClick={props.onSelect} className={`Task ${props.selected? "task-selected":""}`}>
            <p className={"task-title"}>{ props.title }</p>
            <div style={{flexGrow: 1}} />
            <img src={Check} className={"task-complete-button"} onClick={() => {completionMessage(); props.kill()}} alt={"complete task"}/>
            <img src={X} className={"task-kill-button"} onClick={() => {ToastsStore.info("Task removed"); props.kill()}} alt={"remove task"}/>
        </div>
    )
}

export default Task
