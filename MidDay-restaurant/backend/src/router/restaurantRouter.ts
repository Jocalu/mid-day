const { Router } = require('express');
const restController = require('../controller/restaurantController.ts');

function RestaurantRouter() {
  const router = Router();

  router
    .route('/')
    .get(restController.getAllRestaurants)
    .post(restController.createRestaurant);

  router
    .route('/:restaurantId')
    .get(restController.getRestaurant)
    .delete(restController.deleteRestaurant)
    .put(restController.updateRestaurant);

  return router;
}

module.exports = RestaurantRouter();
