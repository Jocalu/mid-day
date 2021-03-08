const {
  getUserRestaurant,
  getAllUserRestaurants,
  createUserRestaurant,
  updateUserRestaurant,
  deleteUserRestaurant,
} = require('./userRestaurantController');
const UserRestaurant = require('../models/userRestaurantModel');

jest.mock('../models/userRestaurantModel');

describe('Given a createUserRestaurant function', () => {
  describe('When is invoked with body name', () => {
    test('Then should call json', () => {
      const req = { body: { name: 'Jose' } };
      const res = { json: jest.fn() };

      createUserRestaurant(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getAllUserRestaurants function', () => {
  describe('When is invoked', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {};

      UserRestaurant.find.mockImplementationOnce(() => ({ populate: jest.fn() }));

      await getAllUserRestaurants(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  test('Then should call status with value 500', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    const req = {};

    UserRestaurant.find.mockImplementationOnce(() => { throw new Error('Error'); });

    await getAllUserRestaurants(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe('Given a getUserRestaurant function', () => {
  describe('When is invoked with a first argument truthy', () => {
    test('Then should call status', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          userParam: 1,
        },
      };

      UserRestaurant.findById
        .mockImplementationOnce((query, callback) => callback(true));

      await getUserRestaurant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('When is invoked with a first argument falsy', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          userParam: 1,
        },
      };

      UserRestaurant.findById.mockImplementationOnce(() => ({ populate: jest.fn() }));

      await getUserRestaurant(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a updateUserRestaurant function', () => {
  describe('When is invoked', () => {
    test('Then should call json with body', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          userId: 1,
        },
        body: {
          password: 'newpassword',
        },
      };

      UserRestaurant.findByIdAndUpdate.mockImplementationOnce(() => ({ populate: jest.fn() }));

      await updateUserRestaurant(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Then should call status with value 500', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          userId: 1,
        },
        body: {
          password: 'newpassword',
        },
      };

      UserRestaurant.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error('Error'); });

      await updateUserRestaurant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a deleteUserRestaurant function', () => {
  describe('When is invoked', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          userId: 1,
        },
      };

      UserRestaurant.findByIdAndDelete
        .mockImplementationOnce(() => ({ populate: jest.fn() }));

      await deleteUserRestaurant(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with a first argument truthy', () => {
    test('Then should call send', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          userId: 1,
        },
      };

      UserRestaurant.findByIdAndDelete
        .mockImplementationOnce((query, callback) => callback(true));

      await deleteUserRestaurant(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
