const Restaurant = require('../models/restaurantModel');

const restaurantController = () => {
  const getRestaurant = async (req, res) => {
    const { restaurantId } = req.params;
    await Restaurant
      .findById(restaurantId, (error, product) => {
        if (error) {
          res.status(500);
          res.send('Error');
        } else {
          res.json(product);
        }
      });
  };

  const getAllRestaurants = async (req, res) => {
    const allProducts = await Restaurant
      .find({});
    res.json(allProducts);
  };

  const createRestaurant = (req, res) => {
    const newRestaurant = new Restaurant(req.body);

    newRestaurant.save((error) => {
      if (error) {
        res.status(500);
        res.send('Error');
      } else {
        res.json(newRestaurant);
      }
    });
  };

  const updateRestaurant = (req, res) => {
    const { restaurantId } = req.params;
    const {
      capacity, phone,
    } = req.body;
    Restaurant.findByIdAndUpdate({ _id: restaurantId },
      {
        capacity, phone,
      }, { new: true }, (error, updated) => {
        if (error) {
          res.status(500);
          res.send('Error');
        } else {
          res.json(updated);
        }
      });
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
