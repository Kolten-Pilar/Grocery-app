//imports
const asyncHandler = require("express-async-handler");
const Item = require("..//models/itemModel"); //import Item model
const User = require('../models/userModel'); //import User model

// @desc    Get all items
// @route   GET /api/items
// @access  Private
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({user: req.user.id}); //find all items

  res.status(200).json(items);
});

// @desc    Create an item
// @route   POST /api/items
// @access  Private
const createItem = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter text");
  }

  const item = await Item.create({
    text: req.body.text,
    user: req.user.id,
  }); //create item

  res.status(200).json(item);
});

//@desc     Update an item
//@route    PUT /api/items/:id
//@access   Private
const updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id); //find item by id

  if (!item) { //check if item exists
    res.status(400);
    throw new Error("Item not found");
  }

  //check for user
  if(!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  //check if user owns item
  if(item.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });


  res.status(200).json(updatedItem);
});

//@desc     Delete an item
//@route    DELETE /api/items/:id
//@access   Private
const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id); //find item by id

  //check if item exists
  if (!item) {
    res.status(400);
    throw new Error("Item not found");
  }

  //check for user
  if(!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  //check if user owns item
  if(item.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await item.deleteOne(); //delete item

  res.status(200).json({id: req.params.id});
});

module.exports = {
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
