const Course = require('../models/courseModel.js');
require('../models/ingredientModel');

const courseController = () => {
  const createCourse = (req, res) => {
    const newCourse = new Course(req.body);
    newCourse
      .save(res.json(newCourse));
  };

  const getCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
      const course = await Course
        .findById(courseId)
        .populate('ingredient');

      res.json(course);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const getAllCourses = async (req, res) => {
    try {
      const allCourses = await Course
        .find({}).populate('ingredient');
      res.json(allCourses);
    } catch (error) {
      res.status(500);
      res.send('There was an error searching');
    }
  };

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const {
      name, type, extra,
    } = req.body;
    try {
      const updated = await Course
        .findByIdAndUpdate(courseId, { name, type, extra }, { new: true })
        .populate('ingredient');

      res.json(updated);
    } catch (error) {
      res.status(500);
      res.send('There was an error updating');
    }
  };

  const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
      const course = await Course
        .findByIdAndDelete(courseId);

      res.json(course);
    } catch (error) {
      res.status(500);
      res.send('Error');
    }
  };

  return {
    getCourse,
    getAllCourses,
    createCourse,
    updateCourse,
    deleteCourse,
  };
};

module.exports = courseController();
