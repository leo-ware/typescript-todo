import React, {useState} from 'react';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from "react-toasts";
import NewTask from "../NewTask/NewTask";
import './App.css'
import TaskBundle from "../TaskBundle/TaskBundle";

const defaultTasks = ['Water the garden', 'Do something else idk', 'Invade Carthage']

let lastAssignedKey = 0
const getKey = () => {
    lastAssignedKey++;
    return lastAssignedKey
}

function App() {
  const [tasks, setTasks] = useState(defaultTasks)
  const addTask = (task: string) => {
      if (!tasks.includes(task)){
          setTasks([...tasks, task])
      } else {
          ToastsStore.error("Task already exists")
      }
  }
  const removeTask = (task: string) => {setTasks(tasks.filter((el: string) => el !== task))}

  return (
    <div className="App">
        <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} store={ToastsStore} />
        <div className={"tasks-container"}>
            <h1>Todo List</h1>
            <NewTask addTask={addTask} />
            <TaskBundle tasks={tasks} removeTask={removeTask} getKey={getKey} />
        </div>
    </div>
  );
}

export default App;
