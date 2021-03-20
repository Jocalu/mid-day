const Dish = require('../models/dishModel.js');
const Ingredient = require('../models/ingredientModel');

const dishController = () => {
  const createDish = (req, res) => {
    const newDish = new Dish(req.body);
    newDish
      .save(res.json(newDish));
  };

  const getAllDishes = async (req, res) => {
    try {
      const allDishes = await Dish
        .find({})
        .populate('ingredient')
        .exec();
      res.json(allDishes);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const getIngredients = async (req, res) => {
    try {
      const ingredients = await Ingredient
        .find({})
        .exec();
      res.json(ingredients);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const deleteDish = async (req, res) => {
    const { dishId } = req.params;
    try {
      const dish = await Dish
        .findByIdAndDelete(dishId)
        .exec();
      res.json(dish);
    } catch (error) {
      res.status(500);
      res.send('Error');
    }
  };

  return {
    getAllDishes,
    createDish,
    deleteDish,
    getIngredients,
  };
};

module.exports = dishController();
