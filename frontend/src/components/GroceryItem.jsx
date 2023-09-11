import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../features/items/itemSlice'

function GroceryItem({item}) {
  const dispatch = useDispatch()

  return (
    <div className="goal">
      <div>
        {new Date(item.createdAt).toLocaleString('en-us')}
      </div>
      <h2>{item.text}</h2>
      <button onClick={() => dispatch(deleteItem(item._id))} className="close">X</button>
    </div>
  )
}

export default GroceryItem