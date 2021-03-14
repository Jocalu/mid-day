const {
  getCourse, getAllCourses, createCourse, updateCourse, deleteCourse,
} = require('./courseController');
const Course = require('../models/courseModel');

jest.mock('../models/courseModel');

describe('Given a createCourse function', () => {
  describe('When is invoked with body name', () => {
    test('Then should call json', () => {
      const req = { body: { name: 'Canelón de carne' } };
      const res = { json: jest.fn() };

      createCourse(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getAllCourses function', () => {
  describe('When is invoked', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {};

      Course.find.mockImplementationOnce(() => ({ populate: jest.fn() }));

      await getAllCourses(req, res);

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

    Course.find.mockImplementationOnce(() => { throw new Error('Error'); });

    await getAllCourses(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe('Given a getCourse function', () => {
  describe('When is invoked with a first argument truthy', () => {
    test('Then should call status', async () => {
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

      Course.findById
        .mockImplementationOnce((query, callback) => callback(true));

      await getCourse(req, res);

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
          id: 1,
        },
      };

      Course.findById.mockImplementationOnce(() => ({ populate: jest.fn() }));

      await getCourse(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a updateCourse function', () => {
  describe('When is invoked', () => {
    test('Then should call json with body', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          id: 1,
        },
        body: {
          name: 'Ensalada',
        },
      };

      Course.findByIdAndUpdate.mockImplementationOnce(() => ({ populate: jest.fn() }));

      await updateCourse(req, res);

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
          id: 1,
        },
        body: {
          name: 'Ensalada',
        },
      };

      Course.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error('Error'); });

      await updateCourse(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a deleteCourse function', () => {
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

      Course.findByIdAndDelete
        .mockImplementationOnce(() => ({ populate: jest.fn() }));

      await deleteCourse(req, res);

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

      Course.findByIdAndDelete
        .mockImplementationOnce((query, callback) => callback(true));

      await deleteCourse(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
