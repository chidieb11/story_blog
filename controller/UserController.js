import User from "../models/User.js";

export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
  }
};
