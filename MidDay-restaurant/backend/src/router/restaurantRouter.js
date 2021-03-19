const { Router } = require('express');
const restController = require('../controller/restaurantController');

function RestaurantRouter() {
  const router = Router();
  router
    .route('/categories')
    .get(restController.getCategories);

  router
    .route('/')
    .get(restController.getAllRestaurants);

  router
    .route('/:restaurantId')
    .get(restController.getRestaurant)
    .delete(restController.deleteRestaurant)
    .put(restController.updateRestaurant);

  router
    .route('/menus/:restaurantId/')
    .post(restController.addMenusRestaurant);

  router
    .route('/dishes/:restaurantId/')
    .post(restController.addDishesRestaurant);

  return router;
}

module.exports = RestaurantRouter();
