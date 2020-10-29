import React, {useState} from "react";
import Task from "../Task/Task";
import './TaskBundle.css'

interface taskBundleProps {
    tasks: string[];
    removeTask: (task: string) => void;
    getKey: () => number;
}

const TaskBundle = (props: taskBundleProps) => {
    const [selected, setSelected] = useState(-1)
    const incrementSelected = () => setSelected(selected + 1)
    const decrementSelected = () => setSelected(selected - 1)

    let renderedTasks = []
    for (let i = 0; i < props.tasks.length; i++){
        let task = props.tasks[i]
        renderedTasks.push(
            <Task
                onSelect={() => {setSelected(i)}}
                selected={i===selected}
                incrementSelected={incrementSelected}
                decrementSelected={decrementSelected}
                title={task}
                kill={() => {props.removeTask(task)}}
                key={props.getKey()}
            />
            )
    }

    return <div className={"TaskBundle"}>{renderedTasks}</div>
}

export default TaskBundle
