const express = require('express');
const router = express.Router();
const authenticationController = require('../controller/authentication.controller');

// router.post('/', authenticationController.addAuthentication);
// router.get('/', authenticationController.findAuthentications);
// router.get('/:AuthenticationID', authenticationController.findAuthenticationById);
// router.put('/:AuthenticationID', authenticationController.updateAuthentication);
// router.delete('/:AuthenticationID', authenticationController.deleteById);


router.post('/register',authenticationController.addAuthentication);
router.post('/login',authenticationController.loginAuthentication);
//router.get('/',authenticationController.getAllAuthentications);



module.exports = router;
