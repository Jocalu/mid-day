const { Router } = require('express');
const userRestaurantController = require('../controller/userRestaurantController');

function UserRestaurantRouter() {
  const router = Router();

  router
    .route('/')
    .get(userRestaurantController.getAllUserRestaurants);

  router
    .route('/:userId')
    .get(userRestaurantController.getUserRestaurant)
    .delete(userRestaurantController.deleteUserRestaurant)
    .put(userRestaurantController.updateUserRestaurant);

  return router;
}

module.exports = UserRestaurantRouter();
