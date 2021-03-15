const Menu = require('../models/menuModel.js');

const menuController = () => {
  const createMenu = (req, res) => {
    const newMenu = new Menu(req.body);
    newMenu
      .save(res.json(newMenu));
  };

  const getMenu = async (req, res) => {
    const { menuId } = req.params;
    try {
      const menu = await Menu
        .findById(menuId)
        .populate('ingredient');

      res.json(menu);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const deleteMenu = async (req, res) => {
    const { menuId } = req.params;
    try {
      const menu = await Menu
        .findByIdAndDelete(menuId);

      res.json(menu);
    } catch (error) {
      res.status(500);
      res.send('Error');
    }
  };

  return {
    createMenu,
    deleteMenu,
    getMenu,
  };
};

module.exports = menuController();
