
const express = require('express');
const router = express.Router();

const roleRoutes = require('./role.route');

const resourceRoutes = require("./resource.route");
const courseRoutes=require('./course.route');
const resourceEnquiryRoutes=require('./resourceEnquiry.route')
const course_enquiryRoutes = require('./courseEnquiry.route');
const authenticationRoutes = require('./authentication.route')

router.use('/roles', roleRoutes);

router.use('/course',courseRoutes);
router.use('/course_enquirys', course_enquiryRoutes);
router.use('/resourceEnquiry',resourceEnquiryRoutes);
router.use('/resource', resourceRoutes)
router.use('/authentications',authenticationRoutes)

module.exports = router;

