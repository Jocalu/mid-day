const { Router } = require('express');
const menuController = require('../controller/menuController');

function MenuRouter() {
  const router = Router();

  router
    .route('/')
    .post(menuController.createMenu);

  router
    .route('/:menuId')
    .delete(menuController.createMenu)
    .get(menuController.getMenu);

  return router;
}

module.exports = MenuRouter();
