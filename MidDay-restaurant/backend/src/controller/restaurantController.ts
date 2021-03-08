const Restaurant = require('../models/restaurantModel.ts');
require('../models/categoryModel');

const restaurantController = () => {
  const getRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    await Restaurant

      .findById(restaurantId, (error, restaurant) => {
        if (error) {
          res.status(500);
          res.send('Error');
        } else {
          res.json(restaurant);
        }
      }).populate('category');
  };

  const getAllRestaurants = async (req, res) => {
    const allRestaurants = await Restaurant
      .find({}).populate('category');
    res.json(allRestaurants);
  };

  const createRestaurant = (req, res) => {
    const newRestaurant = new Restaurant(req.body);
    newRestaurant
      .populate('category')
      .save(res.json(newRestaurant));
  };

  const updateRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    const {
      capacity, phone,
    } = req.body;

    try {
      const updated = await Restaurant
        .findByIdAndUpdate(restaurantId, { capacity, phone }, { new: true });
      res.json(updated);
    } catch (error) {
      res.status(500);
      res.send('There was an error updating');
    }
  };

  const deleteRestaurant = (req, res) => {
    const { restaurantId } = req.params;
    Restaurant.findOneAndDelete({ _id: restaurantId }, (error, deleted) => {
      if (error) {
        res.status(500);
        res.send('Error');
      } else {
        res.json(deleted);
      }
    });
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
