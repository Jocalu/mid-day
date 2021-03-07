const { Router } = require('express');
const restaurantController = require('../controller/restaurantController');

function RestaurantRouter() {
  const router = Router();

  router
    .route('/')
    .get(restaurantController.getAllRestaurants)
    .post(restaurantController.createRestaurant);

  router
    .route('/:restaurantId')
    .get(restaurantController.getRestaurant)
    .delete(restaurantController.deleteRestaurant)
    .put(restaurantController.updateRestaurant);

  return router;
}

module.exports = RestaurantRouter();
