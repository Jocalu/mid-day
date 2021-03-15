const {
  getRestaurant, getAllRestaurants, createRestaurant, updateRestaurant, deleteRestaurant,
} = require('./restaurantController');
const Restaurant = require('../models/restaurantModel');

jest.mock('../models/restaurantModel');

describe('Given a createRestaurant function', () => {
  describe('When is invoked with body name', () => {
    test('Then should call json', () => {
      const req = { body: { name: 'Tagliatella' } };
      const res = { json: jest.fn() };

      createRestaurant(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getAllRestaurants function', () => {
  describe('When is invoked', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {};

      Restaurant.find
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({ populate: jest.fn() })),
            })),
        }));

      await getAllRestaurants(req, res);

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

    Restaurant.find.mockImplementationOnce(() => { throw new Error('Error'); });

    await getAllRestaurants(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe('Given a getRestaurant function', () => {
  describe('When is invoked with a first argument truthy', () => {
    test('Then should call status', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          restaurantParam: 1,
        },
      };

      Restaurant.findById
        .mockImplementationOnce((query, callback) => callback(true));

      await getRestaurant(req, res);

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
          restaurantParam: 1,
        },
      };

      Restaurant.findById
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({ populate: jest.fn() })),
            })),
        }));

      await getRestaurant(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a updateRestaurant function', () => {
  describe('When is invoked', () => {
    test('Then should call json with body', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          restaurantId: 1,
        },
        body: {
          capacity: 12,
        },
      };

      Restaurant.findByIdAndUpdate
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({ populate: jest.fn() })),
            })),
        }));

      await updateRestaurant(req, res);

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
          restaurantId: 1,
        },
        body: {
          capacity: 12,
        },
      };

      Restaurant.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error('Error'); });

      await updateRestaurant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a deleteRestaurant function', () => {
  describe('When is invoked', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          restaurantParam: 1,
        },
      };

      Restaurant.findByIdAndDelete
        .mockImplementationOnce(() => ({ populate: jest.fn() }));

      await deleteRestaurant(req, res);

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
          restaurantParam: 1,
        },
      };

      Restaurant.findByIdAndDelete
        .mockImplementationOnce((query, callback) => callback(true));

      await deleteRestaurant(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
