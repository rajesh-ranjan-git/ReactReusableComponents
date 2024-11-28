import React, { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import ToDoItem from "../components/ToDoItem";
import { MdDeleteForever } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";

const ToDoContainer = () => {
  const [inputValue, setInputValue] = useState();
  const [itemsObjArr, setItemsObjArr] = useState([]);
  const inputElementValue = useRef();

  const storedItems = JSON.parse(localStorage.getItem("itemsObjArr"));

  const itemsObj = { id: "", value: "" };

  const addItemOnEnter = (e) => {
    if (e.code === "Enter") {
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    itemsObj.id = uuid();
    itemsObj.value = inputValue;

    const temp = storedItems || [...itemsObjArr, itemsObj];
    console.log(temp);

    setItemsObjArr(temp);
    localStorage.setItem("itemsObjArr", JSON.stringify(temp));
    inputElementValue.current.value = "";
  };

  const handleClear = () => {
    setItemsObjArr([]);
    inputElementValue.current.value = "";
  };

  const handleDeleteItem = (id) => {
    const temp = itemsObjArr.filter((item) => id !== item.id);
    setItemsObjArr(temp);
  };

  useEffect(() => {
    if (storedItems) setItemsObjArr(storedItems);
  }, []);

  return (
    <main className="p-2 pb-8 m-2 rounded-md shadow-md">
      <div className="flex items-center justify-center p-2 m-2">
        <input
          className="p-3 m-2 border rounded-md outline-none min-w-80 md:min-w-96"
          type="text"
          placeholder="Add items..."
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputElementValue}
          onKeyDown={(e) => addItemOnEnter(e)}
        />
        <button
          className="flex items-center justify-center p-2 m-2 font-semibold text-white transition-all bg-green-700 border border-green-600 rounded-md hover:bg-white hover:text-green-700"
          onClick={() => handleAddItem()}
        >
          <IoAddCircleSharp className="text-4xl" />
          <span className="hidden text-xl md:block">Add</span>
        </button>
        <button
          className="flex items-center justify-center p-2 m-2 font-semibold text-white transition-all bg-red-700 border border-red-600 rounded-md hover:bg-white hover:text-red-700"
          onClick={() => handleClear()}
        >
          <MdDeleteForever className="text-4xl" />
          <span className="hidden text-xl md:block">Clear</span>
        </button>
      </div>

      {itemsObjArr &&
        itemsObjArr.map((itemObj) => {
          return (
            <ToDoItem
              key={itemObj.id}
              item={itemObj}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
    </main>
  );
};

export default ToDoContainer;
