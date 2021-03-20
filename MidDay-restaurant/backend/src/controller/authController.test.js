const { register, login } = require('./authController');
const User = require('../models/restaurantModel');
require('md5');

jest.mock('../models/restaurantModel');
jest.mock('md5');

describe('Given a register function', () => {
  describe('When is invoked with an invalid user', () => {
    test('Then should call and error with status 500', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        body: {},
        password: jest.fn(),
      };

      jest.spyOn(User.prototype, 'save')
        .mockImplementationOnce(() => { throw new Error('Error'); });

      register(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('When is invoked with a valid user', () => {
    test('Then should call json', () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const user = new User({
        email: 'user@user.com',
        firstName: 'Full Name',
        lastName: 'Last Name',
        password: '',
      });
      const req = {
        body: {},
        password: jest.fn(),
        login: (user, () => { res.json(user); }),
      };

      jest.spyOn(User.prototype, 'save').mockReturnValue(req.login);

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
