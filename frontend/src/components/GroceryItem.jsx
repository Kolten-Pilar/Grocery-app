import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem, updateItem } from '../features/items/itemSlice'

function GroceryItem({item}) {
  const [isEditing, setIsEditing] = useState(false) // state to toggle editing, initally false
  const [editedText, setEditedText] = useState(item.text) // state to store edited text

  const dispatch = useDispatch() 

  const handleEdit = () => { // function to handle editing
    setIsEditing(true) 
  }

  const handleSave = () => { // function to handle saving
    dispatch(updateItem({ text: editedText, id: item._id })) // dispatch updateItem action
    setIsEditing(false) // set isEditing to false after dispatching updateItem
  } 
  
  const handleDelete = () => { // function to handle deleting
    dispatch(deleteItem(item._id))
  }

  return (
    <div className=" relative border-2 border-black rounded-xl bg-blue-700 text-white text-2xl font-semibold py-2">
      {isEditing ? (
        <div>
          <input
            type="text"
            className=' w-full p-3 border-2 border-black rounded-xl mb-3 text-center text-black'
            name='text'
            id='text'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
       <div>
        {new Date(item.createdAt).toLocaleString('en-us')}
      </div>
      {item.updatedAt && (
        <div className=' text-sm'>
          Updated: {new Date(item.updatedAt).toLocaleString('en-us')}
        </div>
      )}
      <h2>{item.text}</h2>
      <button onClick={handleDelete} className=" absolute top-0 right-4">X</button> 
      <button onClick={handleEdit} className=" absolute top-0 left-2">Edit</button>
      </>
      )}
    </div>
    )
}

export default GroceryItem