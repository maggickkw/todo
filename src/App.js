import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || [] );
  const [task, setTask] = useState({});

  useEffect(() => {
  localStorage.setItem('taskList', JSON.stringify(taskList))
}, [taskList])

  return (
    <div className="App">
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <ShowTask
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
