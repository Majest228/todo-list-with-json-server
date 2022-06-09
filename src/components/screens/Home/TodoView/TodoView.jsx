import React, { useState } from "react";
import CreateItemField from "../CreateItemField/CreateItemField";
import TodoItem from "../TodoItem/TodoItem";

const TodoView = ({
  tasks,
  onChangeTaskStatus,
  onChangeImportantValue,
  onAddTask,
  onDeleteTask,
}) => {
  const [visibleForm, setVisibleForm] = useState(false);

  return (
    <>
      <div className=" text-white w-4/5 mx-auto">
        <h1 className="text-2xl font-bold mb-2">Список Задач:</h1>
        <div className="text-lg">
          <p>Всего задач: {tasks.length}</p>
          <p>
            Актуальные задачи:{" "}
            {tasks.length - tasks.filter((t) => t.completed === true).length}
          </p>
          <p>
            Выполненых задач: {tasks.filter((t) => t.completed === true).length}
          </p>
          <p className="mb-5">
            Добавлено в израбнное:{" "}
            {tasks.filter((t) => t.important === true).length}
          </p>
        </div>

        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            text={task.text}
            date_start={task.date_start}
            date_end={task.date_end}
            completed={task.completed}
            important={task.important}
            onChangeTaskStatus={onChangeTaskStatus}
            onChangeImportantValue={onChangeImportantValue}
            onDeleteTask={onDeleteTask}
          />
        ))}

        <button
          onClick={() => setVisibleForm(!visibleForm)}
          className="flex items-center border-2 p-2 bg-white text-gray-800 rounded-lg mb-5"
        >
          {visibleForm ? <p>Закрыть форму</p> : <p>Открыть форму</p>}
        </button>
        {visibleForm && <CreateItemField onAddTask={onAddTask} />}
      </div>
    </>
  );
};

export default TodoView;
