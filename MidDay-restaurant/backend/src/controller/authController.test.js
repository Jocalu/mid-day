const {
  register, login,
} = require('./authController');
const UserRestaurant = require('../models/restaurantModel');

jest.mock('../models/restaurantModel');

describe('Given a register function', () => {
  describe('When is invoked with body', () => {
    test('Then should call json', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = { body: {} };

      register(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
