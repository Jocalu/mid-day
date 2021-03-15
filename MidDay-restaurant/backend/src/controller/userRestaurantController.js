const UserRestaurant = require('../models/userRestaurantModel');
require('../models/restaurantModel');

const userRestaurantController = () => {
  const getUserRestaurant = async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await UserRestaurant
        .findById(userId)
        .populate('restaurant');

      res.json(user);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const getAllUserRestaurants = async (req, res) => {
    try {
      const allUsers = await UserRestaurant
        .find({})
        .populate('restaurant');

      res.json(allUsers);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const updateUserRestaurant = async (req, res) => {
    const { userId } = req.params;
    const {
      name, password, email,
    } = req.body;

    try {
      const updated = await UserRestaurant
        .findByIdAndUpdate({ _id: userId }, { name, password, email }, { new: true })
        .populate('restaurant');

      res.json(updated);
    } catch (error) {
      res.status(500);
      res.send('There was an error updating');
    }
  };

  const deleteUserRestaurant = async (req, res) => {
    const { userId } = req.params;

    try {
      const user = await UserRestaurant
        .findByIdAndDelete({ _id: userId });

      res.json(user);
    } catch (error) {
      res.status(500);
      res.send('Error');
    }
  };

  return {
    getUserRestaurant,
    getAllUserRestaurants,
    updateUserRestaurant,
    deleteUserRestaurant,
  };
};

module.exports = userRestaurantController();
