const express = require('express');
const router = express.Router();
const course_enquiryController = require('../controller/courseEnquiry.controller');

router.post('/', course_enquiryController.addCourse_enquiry);
router.get('/', course_enquiryController.findCourse_enquirys);
router.get('/:course_enquiryId', course_enquiryController.findCourse_enquiryById);
router.put('/:course_enquiryId', course_enquiryController.updateCourse_enquiry);
router.delete('/:course_enquiryId', course_enquiryController.deleteById);

module.exports = router;