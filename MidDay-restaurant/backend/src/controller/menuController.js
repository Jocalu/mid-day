const Menu = require('../models/menuModel.js');
require('../models/dishModel.js');

const menuController = () => {
  const createMenu = (req, res) => {
    const newMenu = new Menu(req.body);
    newMenu
      .save(res.json(newMenu));
  };

  const getMenus = async (req, res) => {
    try {
      const menus = await Menu
        .find({})
        .populate('firstCourse')
        .populate('secondCourse')
        .populate('dessert')
        .exec();

      res.json(menus);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const deleteMenu = async (req, res) => {
    const { menuId } = req.params;
    try {
      const menu = await Menu
        .findByIdAndDelete(menuId)
        .exec();

      res.json(menu);
    } catch (error) {
      res.status(500);
      res.send('Error');
    }
  };

  return {
    createMenu,
    deleteMenu,
    getMenus,
  };
};

module.exports = menuController();
