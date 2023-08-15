import "./App.scss";
import Form from "./components/Form";
import CardsContainer from "./components/CardsContainer";
import { useEffect, useState } from "react";

const initialStateTasks = JSON.parse(localStorage.getItem("tasks")) || []; // Si hay tareas en local storage, las renderizo. Si no, lo inicio como un array vacío.

const App = () => {
  const [tasks, setTasks] = useState(initialStateTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  };

  const modifyTaskStatus = (id) => {
    const newArray = tasks.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });

    setTasks(newArray);
  };

  return (
    <div className="content-container">
      <Form addTask={addTask} />
      <CardsContainer
        tasks={tasks}
        deleteTask={deleteTask}
        modifyTaskStatus={modifyTaskStatus}
      />
    </div>
  );
};

export default App;
