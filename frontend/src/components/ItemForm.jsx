import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createItem } from "../features/items/itemSlice";


function ItemForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createItem({ text }));
    setText("");
  };

  return (
    <section className=' w-2/3 m-auto'>
      <form onSubmit={onSubmit}>
        <div className=' mb-3'>
          <label htmlFor="text">Item</label>
          <input
            type="text"
            className=' w-full p-3 border-2 border-black rounded-xl mb-3'
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className=' mb-3'>
          <button className=" px-3 py-5 border-2 border-black rounded-xl bg-blue-700 text-white font-bold cursor-pointer w-1/2" type="submit">
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
}

export default ItemForm;