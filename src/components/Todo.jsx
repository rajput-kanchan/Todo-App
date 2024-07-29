import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/actions";
import { BsSearch } from "react-icons/bs";
import Buttons from "./Buttons";
import TodoList from "./TodoList";

const Todo = () => {
  const [addItem, setAddItem] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoItem = () => {
    if (addItem.trim() !== "") {
      handleAddTodo(addItem.trim());
      setAddItem("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchText(value);
    dispatch(updateTodo(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-6 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        ToDo App
      </h2>
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          type="text"
          placeholder="Add Todo"
          value={addItem}
          onChange={(e) => setAddItem(e.target.value)}
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
        />

        <button
          className="ml-4 p-2 bg-teal-600 text-white rounded hover:bg-gray-500 focus:outline-none"
          onClick={handleAddTodoItem}
        >
          <FaPlusCircle size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Buttons />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500"
            type="text"
            placeholder="Search Items"
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-teal-600 text-white rounded hover:bg-gray-500 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;
