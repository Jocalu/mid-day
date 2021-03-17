const Restaurant = require('../models/restaurantModel.js');
const Category = require('../models/categoryModel');
require('../models/menuModel');

const restaurantController = () => {
  const getCategories = async (req, res) => {
    try {
      const categories = await Category.find({});
      res.json(categories);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

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
        .populate('menu');

      res.json(restaurant);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const getAllRestaurants = async (req, res) => {
    try {
      const allRestaurants = await Restaurant
        .find({})
        .populate('category')
        .populate('menu');

      res.json(allRestaurants);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const updateRestaurant = async (req, res) => {
    const { restaurantId } = req.params;

    try {
      const updated = await Restaurant
        .findByIdAndUpdate(restaurantId, req.body, { new: true })
        .populate('category')
        .populate('menu');

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
        .findByIdAndDelete(restaurantId);

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
    getCategories,
  };
};

module.exports = restaurantController();
