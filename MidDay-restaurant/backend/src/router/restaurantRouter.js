const { Router } = require('express');
const restController = require('../controller/restaurantController');

function RestaurantRouter() {
  const router = Router();
  router
    .route('/categories')
    .get(restController.getCategories);

  router
    .route('/')
    .get(restController.getAllRestaurants)
    .post(restController.createRestaurant);

  router
    .route('/:restaurantId')
    .get(restController.getRestaurant)
    .delete(restController.deleteRestaurant)
    .put(restController.updateRestaurant);
  /*    .post(restController.addMenusRestaurant); */

  return router;
}

module.exports = RestaurantRouter();
