const Course_enquiry = require('../models/courseEnquiry');
var course_enquiryDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateCourse_enquiry: updateCourse_enquiry
}

function findAll() {
    return Course_enquiry.findAll();
}

function findById(course_enquiryId) {
    return Course_enquiry.findByPk(course_enquiryId);
}

function deleteById(course_enquiryId) {
    return Course_enquiry.destroy({ where: { course_enquiryId: course_enquiryId } });
}

function create(course_enquiry) {
    var newCourse_enquiry = new Course_enquiry(course_enquiry);
    return newCourse_enquiry.save();
}

function updateCourse_enquiry(course_enquiry, course_enquiryId) {
 Course_enquiry.findByPk(course_enquiryId).then(data=>{
  previous=data.status
 })

// var b=course_enquiry.status
    
    var updateCourse_enquiry = {
        course_enquiryId :course_enquiry.course_enquiryId,
        course_name: course_enquiry.course_name,
        enquirer_name: course_enquiry.enquirer_name,
        enquirer_email: course_enquiry.enquirer_email,
        enquirer_phone: course_enquiry.enquirer_phone,
        status: course_enquiry.status,
        previous_status:previous
        
    };
    return Course_enquiry.update(updateCourse_enquiry, { where: { course_enquiryId: course_enquiryId } });
}
module.exports = course_enquiryDao;