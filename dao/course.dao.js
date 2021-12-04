const Course = require('../models/course');
var courseDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateCourse: updateCourse
}

function findAll() {
    return Course.findAll();
}

function findById(id) {
    return Course.findByPk(id);
}

function deleteById(id) {
    return Course.destroy({ where: { id: id } });
}

function create(course) {
    var newCourse = new Course(course);
    return newCourse.save();
}

function updateCourse(course, id) {
    var updateCourse = {
        course_name: course.course_name,
        description: course.description,
        thumbnail: course.thumbnail,
        course_fee: course.course_fee,
        total_seat: course.total_seat,
        available_seat: course.available_seat
    };
    return Course.update(updateCourse, { where: { id: id } });
}
module.exports = courseDao;