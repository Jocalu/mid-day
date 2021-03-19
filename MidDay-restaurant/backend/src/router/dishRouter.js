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
    .delete(dishController.deleteDish);

  return router;
}

module.exports = DishRouter();
