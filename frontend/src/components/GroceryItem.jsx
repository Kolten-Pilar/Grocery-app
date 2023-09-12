import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../features/items/itemSlice'

function GroceryItem({item}) {
  const dispatch = useDispatch()

  return (
    <div className=" relative border-2 border-black rounded-xl bg-blue-700 text-white text-2xl font-semibold py-2">
      <div>
        {new Date(item.createdAt).toLocaleString('en-us')}
      </div>
      <h2>{item.text}</h2>
      <button onClick={() => dispatch(deleteItem(item._id))} className=" absolute top-0 right-4">X</button>
    </div>
  )
}

export default GroceryItem