const UserRestaurant = require('../models/userRestaurantModel');

const userRestaurantController = () => {
  const getUserRestaurant = async (req, res) => {
    const { userId } = req.params;
    await UserRestaurant
      .findById(userId, (error, user) => {
        if (error) {
          res.status(500);
          res.send('Error');
        } else {
          res.json(user);
        }
      });
  };

  const getAllUserRestaurants = async (req, res) => {
    const allUsers = await UserRestaurant
      .find({});
    res.json(allUsers);
  };

  const createUserRestaurant = (req, res) => {
    const newUser = new UserRestaurant(req.body);
    newUser.save(
      res.json(newUser),
    );
  };

  const updateUserRestaurant = async (req, res) => {
    const { userId } = req.params;
    const {
      name, password,
    } = req.body;

    try {
      const updated = await UserRestaurant
        .findByIdAndUpdate({ _id: userId }, { name, password }, { new: true });
      res.json(updated);
    } catch (error) {
      res.status(500);
      res.send('There was an error updating');
    }
  };

  const deleteUserRestaurant = (req, res) => {
    const { userId } = req.params;
    UserRestaurant.findOneAndDelete({ _id: userId }, (error, deleted) => {
      if (error) {
        res.status(500);
        res.send('Error');
      } else {
        res.json(deleted);
      }
    });
  };

  return {
    getUserRestaurant,
    getAllUserRestaurants,
    createUserRestaurant,
    updateUserRestaurant,
    deleteUserRestaurant,
  };
};

module.exports = userRestaurantController();
