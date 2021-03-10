const { Router } = require('express');
const dishController = require('../controller/dishController');

function DishRouter() {
  const router = Router();

  router
    .route('/')
    .get(dishController.getAllDishes)
    .post(dishController.createDish);

  router
    .route('/:dishId')
    .get(dishController.getDish)
    .delete(dishController.deleteDish)
    .put(dishController.updateDish);

  return router;
}

module.exports = DishRouter();
