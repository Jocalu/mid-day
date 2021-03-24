const {
  getRestaurant,
  getAllRestaurants,
  updateRestaurant,
  deleteRestaurant,
  getCategories,
  addMenusRestaurant,
  addDishesRestaurant,
} = require('./restaurantController');

const Restaurant = require('../models/restaurantModel');
const Category = require('../models/categoryModel');
require('../models/menuModel');
require('../models/dishModel');

jest.mock('../models/restaurantModel');
jest.mock('../models/categoryModel');
jest.mock('../models/menuModel');
jest.mock('../models/dishModel');

describe('Given a getCategories function', () => {
  describe('When is invoked', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {};

      Category.find.mockImplementationOnce(() => ({
        exec: jest.fn(),
      }));

      await getCategories(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Then should call status with value 500', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {};

      Category.find.mockImplementationOnce(() => { throw new Error('Error'); });

      await getCategories(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a addMenusRestaurant function', () => {
  describe('When is invoked without a menu', () => {
    test('Then should call json without a menu', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          restaurantParam: 1,
        },
        body: {},
      };

      Restaurant.findById.mockReturnValue({});

      Restaurant.findByIdAndUpdate.mockReturnValue({});

      await addMenusRestaurant(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    describe('When is invoked with a menu', () => {
      test('Then should call json with a menu', async () => {
        const res = {
          json: jest.fn(),
          send: jest.fn(),
          status: jest.fn(),
        };
        const req = {
          params: {
            restaurantParam: 1,
          },
          body: { },
        };

        Restaurant.findById.mockReturnValue({ menus: [] });
        Restaurant.findByIdAndUpdate.mockReturnValue({ exec: jest.fn() });

        await addMenusRestaurant(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    test('Then should call status with value 500', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          restaurantParam: 1,
        },
        body: {},
      };

      Restaurant.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error('Error'); });

      await addMenusRestaurant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a addDishesRestaurant function', () => {
  describe('When is invoked without dishes', () => {
    test('Then should call json without dishes', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          restaurantParam: 1,
        },
        body: {},
      };

      Restaurant.find.mockReturnValue({});
      Restaurant.findByIdAndUpdate.mockReturnValue({});

      await addDishesRestaurant(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    describe('When is invoked with dishes', () => {
      test('Then should call json with dishes', async () => {
        const res = {
          json: jest.fn(),
          send: jest.fn(),
          status: jest.fn(),
        };
        const req = {
          params: {
            restaurantParam: 1,
          },
          body: {},
        };

        Restaurant.findById.mockReturnValue({ dishes: [] });
        Restaurant.findByIdAndUpdate.mockReturnValue({});

        await addDishesRestaurant(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });

    test('Then should call status with value 500', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          restaurantParam: 1,
        },
        body: {},
      };

      Restaurant.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error('Error'); });

      await addDishesRestaurant(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
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
              exec: jest.fn(),
            })),
        }));

      await getRestaurant(req, res);

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
              exec: jest.fn(),
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
              exec: jest.fn(),
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
        .mockImplementationOnce(() => ({ exec: jest.fn() }));

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
