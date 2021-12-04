const express = require('express');
const router = express.Router();
const ResourceController = require('../controller/resource.controller');

router.post('/', ResourceController.addResource);
router.get('/', ResourceController.findResource);
router.get('/:id', ResourceController.findResourceById);
router.put('/:id', ResourceController.updateResource);
router.delete('/:id', ResourceController.deleteResourceById);

module.exports = router;