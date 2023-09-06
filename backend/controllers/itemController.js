//imports
const asyncHandler = require('express-async-handler');

// @desc    Get all items
// @route   GET /api/items
// @access  Private
const getItems = asyncHandler(async(req, res) => {
  res.json({message: 'Get Items'});
})

// @desc    Create an item
// @route   POST /api/items
// @access  Private
const createItem = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please enter text')
  } else

  res.status(200).json({message: 'Create Item'});
});

//@desc     Update an item
//@route    PUT /api/items/:id
//@access   Private
const updateItem = asyncHandler(async(req, res) => {
  res.json({message: `Update item ${req.params.id}`});
});

//@desc     Delete an item
//@route    DELETE /api/items/:id
//@access   Private
const deleteItem = asyncHandler(async(req, res) => {
  res.json({message: `Delete item ${req.params.id}`});
});

module.exports = {
  getItems,
  createItem,
  updateItem,
  deleteItem
};