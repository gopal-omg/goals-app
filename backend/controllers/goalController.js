const asyncHandler = require("express-async-handler");

// @desc     Get goals
// @route    GET /api/goals
// @access   Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Add Goal" });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Edit Goals ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
