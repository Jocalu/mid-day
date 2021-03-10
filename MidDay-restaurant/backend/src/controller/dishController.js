const Dish = require('../models/dishModel.js');
require('../models/ingredientModel');

const dishController = () => {
  const createDish = (req, res) => {
    const newDish = new Dish(req.body);
    newDish
      .save(res.json(newDish));
  };

  const getDish = async (req, res) => {
    const { dishId } = req.params;
    try {
      const dish = await Dish
        .findById(dishId)
        .populate('ingredient')
        
      res.json(dish);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const getAllDishes = async (req, res) => {
    try {
      const allDishes = await Dish
        .find({}).populate('ingredient')
      res.json(allDishes);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const updateDish = async (req, res) => {
    const { dishId } = req.params;
    const {
      name, type, extra
    } = req.body;
    try {
      const updated = await Dish
        .findByIdAndUpdate(dishId, { name, type, extra }, { new: true })
        .populate('ingredient')
        
      res.json(updated);
    } catch (error) {
      res.status(500);
      res.send('There was an error updating');
    }
  };

  const deleteDish = async (req, res) => {
    const { dishId } = req.params;
    try {
      const dish = await Dish
        .findByIdAndDelete(dishId)
        

      res.json(dish);
    } catch (error) {
      res.status(500);
      res.send('Error');
    }
  };

  return {
    getDish,
    getAllDishes,
    createDish,
    updateDish,
    deleteDish,
  };
};

module.exports = dishController();
