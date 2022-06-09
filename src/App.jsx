import React, { useState, useEffect } from "react";
import Home from "../src/components/screens/Home/Home";
import uniqid from "uniqid";
import axios from "axios";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/tasks").then(({ data }) => {
      setTasks(data);
    });
    axios.get("http://localhost:3002/lists").then(({ data }) => {
      setLists(data);
    });
  }, []);
  console.log(tasks);
  const onChangeImportantValue = (id) => {
    const newTasks = [...tasks];
    const currentItemImportant = newTasks.find((t) => t.id === id);
    currentItemImportant.important = !currentItemImportant.important;
    setLists(newTasks);
    axios
      .put(`http://localhost:3002/tasks/${id}`, currentItemImportant)
      .then((res) => console.log(res));
  };

  const onChangeTaskStatus = (id) => {
    const newTasks = [...tasks];
    const currentItem = newTasks.find((t) => t.id === id);
    currentItem.completed = !currentItem.completed;

    setLists(newTasks);
    axios.put(`http://localhost:3002/tasks/${id}`, currentItem);
  };

  const onAddTask = (text, date) => {
    const newItem = {
      id: uniqid(),
      text: text,
      completed: false,
      important: false,
      date_start: new Date().toISOString().split("T")[0],
      date_end: date,
    };

    setLists(tasks.push(newItem));
    axios
      .post(`http://localhost:3002/tasks`, newItem)
      .then((res) => console.log(res));
  };

  const onDeleteTask = (id) => {
    const newTasks = [...tasks];
    const taskWithoutElem = newTasks.filter((t) => t.id != id);
    const currentElem = newTasks.find((t) => t.id === id);
    setTasks(taskWithoutElem);

    axios.delete(`http://localhost:3002/tasks/${id}`, currentElem);
  };

  return (
    <div className="App">
      <Home
        tasks={tasks}
        onChangeTaskStatus={onChangeTaskStatus}
        onChangeImportantValue={onChangeImportantValue}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
};

export default App;
