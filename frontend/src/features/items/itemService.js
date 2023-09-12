import axios from "axios";

const API_URL = "/api/items/";

//Create new item
const createItem = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, itemData, config);

  return response.data;
};

//Get user items
const getItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Update user item
const updateItem = async (itemId, updatedText, token) => {
  token = token || JSON.parse(localStorage.getItem('user')).token;
  console.log(itemId);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },

  };
  const updatedItem = {
    text: updatedText,
  };

  try {
    console.log('update item response:',itemId);
  const response = await axios.put(API_URL + itemId, updatedItem, config);

  return response.data;
  } catch (error) {
    console.log('update item error:', error);
    throw error;
  }
};

// Delete user item
const deleteItem = async (itemId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + itemId, config);

  return response.data;
};

const itemService = {
  createItem,
  getItems,
  updateItem,
  deleteItem,
};

export default itemService;