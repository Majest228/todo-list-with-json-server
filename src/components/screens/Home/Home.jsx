import React from "react";
import TodoView from "./TodoView/TodoView";

const Home = ({
  tasks,
  onChangeTaskStatus,
  onChangeImportantValue,
  onAddTask,
  onDeleteTask,
}) => {
  return (
    <div>
      <TodoView
        onChangeTaskStatus={onChangeTaskStatus}
        tasks={tasks}
        onChangeImportantValue={onChangeImportantValue}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
};

export default Home;
