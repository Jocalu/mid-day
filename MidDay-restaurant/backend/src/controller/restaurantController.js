const Restaurant = require('../models/restaurantModel.js');
require('../models/categoryModel');

const restaurantController = () => {
  const createRestaurant = (req, res) => {
    const newRestaurant = new Restaurant(req.body);
    newRestaurant
      .save(res.json(newRestaurant));
  };

  const getRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    try {
      const restaurant = await Restaurant
        .findById(restaurantId)
        .populate('category')
        .exec();
      res.json(restaurant);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const getAllRestaurants = async (req, res) => {
    try {
      const allRestaurants = await Restaurant
        .find({}).populate('category').exec();
      res.json(allRestaurants);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const updateRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    const {
      capacity, phone,
    } = req.body;
    try {
      const updated = await Restaurant
        .findByIdAndUpdate(restaurantId, { capacity, phone }, { new: true })
        .populate('category')
        .exec();
      res.json(updated);
    } catch (error) {
      res.status(500);
      res.send('There was an error updating');
    }
  };

  const deleteRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    try {
      const restaurant = await Restaurant
        .findByIdAndDelete(restaurantId)
        .exec();

      res.json(restaurant);
    } catch (error) {
      res.status(500);
      res.send('Error');
    }
  };

  return {
    getRestaurant,
    getAllRestaurants,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
  };
};

module.exports = restaurantController();
