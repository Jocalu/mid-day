const {
  createMenu,
  getMenus,
  deleteMenu,

} = require('./menuController');

const Menu = require('../models/menuModel');
require('../models/dishModel');

jest.mock('../models/menuModel');
jest.mock('../models/dishModel');

describe('Given a createMenu function', () => {
  describe('When is invoked with body name', () => {
    test('Then should call json', () => {
      const req = { body: { } };
      const res = { json: jest.fn() };

      createMenu(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getMenu function', () => {
  describe('When is invoked with a first argument truthy', () => {
    test('Then should call status', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = { };

      Menu.find
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({
                  populate: jest.fn()
                    .mockImplementationOnce(() => ({
                      exec: jest.fn(),
                    })),
                })),
            })),
        }));

      await getMenus(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with a first argument falsy', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = { };

      Menu.find.mockImplementationOnce(() => { throw new Error('Error'); });

      await getMenus(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteMenu function', () => {
  describe('When is invoked', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          id: 1,
        },
      };

      Menu.findByIdAndDelete
        .mockImplementationOnce(() => ({ exec: jest.fn() }));

      await deleteMenu(req, res);

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
          id: 1,
        },
      };

      Menu.findByIdAndDelete
        .mockImplementationOnce((query, callback) => callback(true));

      await deleteMenu(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
