const course_enquiryDao = require('../dao/courseEnquiry.dao');
var course_enquiryController = {
    addCourse_enquiry: addCourse_enquiry,
    findCourse_enquirys: findCourse_enquirys,
    findCourse_enquiryById: findCourse_enquiryById,
    updateCourse_enquiry: updateCourse_enquiry,
    deleteById: deleteById
}

function addCourse_enquiry(req, res) {
    let course_enquiry = req.body;
    course_enquiryDao.create(course_enquiry).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findCourse_enquiryById(req, res) {
    course_enquiryDao.findById(req.params.course_enquiryId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    course_enquiryDao.deleteById(req.params.course_enquiryId).
        then((data) => {
            res.status(200).json({
                message: "course enquiry deleted successfully",
                course_enquiry: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateCourse_enquiry(req, res) {
    course_enquiryDao.updateCourse_enquiry(req.body, req.params.course_enquiryId).
        then((data) => {
            res.status(200).json({
                message: "course enquiry updated successfully",
                course_enquiry: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findCourse_enquirys(req, res) {
    course_enquiryDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = course_enquiryController;