const { register, login } = require('./authController');
require('../models/restaurantModel');

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

describe('Given a login function', () => {
  describe('When is invoked with body', () => {
    test('Then should call json', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = { body: {} };

      login(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
