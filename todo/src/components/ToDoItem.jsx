import React from "react";
import { MdDelete } from "react-icons/md";

const ToDoItem = ({ item, handleDeleteItem }) => {
  return (
    <div className="flex items-center justify-center p-2 m-2 rounded-md shadow-lg">
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl font-semibold">
          {item ? item.value : "Item"}
        </span>
        <button
          className="flex items-center justify-center p-2 m-2 font-semibold text-white transition-all bg-red-700 border border-red-600 rounded-md hover:bg-white hover:text-red-700"
          onClick={() => handleDeleteItem(item.id)}
        >
          <MdDelete className="text-4xl" />
          <span className="hidden text-xl md:block">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
