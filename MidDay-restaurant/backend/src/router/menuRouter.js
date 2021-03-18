const { Router } = require('express');
const menuController = require('../controller/menuController');

function MenuRouter() {
  const router = Router();

  router
    .route('/')
    .post(menuController.createMenu)
    .get(menuController.getMenus);

  router
    .route('/:menuId')
    .delete(menuController.deleteMenu);

  return router;
}

module.exports = MenuRouter();
