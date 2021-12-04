const express = require('express');
const router = express.Router();
const roleController = require('../controller/role.controller');

router.post('/', roleController.addRole);
router.get('/', roleController.findRoles);
router.get('/:RoleID', roleController.findRoleById);
router.put('/:RoleID', roleController.updateRole);
router.delete('/:RoleID', roleController.deleteById);

module.exports = router;
