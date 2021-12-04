const express = require('express');
const router = express.Router();
const resourceEnquiryController = require('../controller/resourceEnquiry.controller');

router.post('/', resourceEnquiryController.addResourceEnquiry);
router.get('/', resourceEnquiryController.findResourceEnquirys);
router.get('/:id', resourceEnquiryController.findResourceEnquiryById);
router.put('/:id', resourceEnquiryController.updateResourceEnquiry);
router.delete('/:id', resourceEnquiryController.deleteById);

module.exports = router;