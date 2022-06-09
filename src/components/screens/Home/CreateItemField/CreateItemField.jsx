import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
const CreateItemField = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  return (
    <>
      <div className="flex items-center mb-4 rounded-2xl border-zinc-800 p-5 w-full border-2">
        <input
          className="bg-transparent w-full border-none outline-none"
          placeholder="Название задачи"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-4 rounded-2xl border-zinc-800 p-5 w-full border-2">
        <input
          className="bg-transparent w-full border-none outline-none"
          placeholder="Дед лайн задачи"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="mr-4" onClick={() => onAddTask(text, date)}>
        Добавить запись
      </button>
    </>
  );
};

export default CreateItemField;
