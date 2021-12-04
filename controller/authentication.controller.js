// User Controller

const authenticationDao = require('../dao/authentication.dao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config ()

var authenticationController = {
    addAuthentication: addAuthentication,
    //findAuthentications: findAuthentications,
    //findAuthenticationById: findAuthenticationById,
    //updateAuthentication: updateAuthentication,
    //deleteById: deleteById

    loginAuthentication : loginAuthentication,
    //getAllAuthentications : getAllAuthentications
}

function addAuthentication(req, res) {
    let authentication = {}
    authentication.UserName = req.body.UserName;
    authentication.Password = bcrypt.hashSync(req.body.Password);
    authentication.RoleID  = req.body.RoleID;
    
    authenticationDao.create(authentication)
        .then((data) => {
            authenticationDao.findByUserName(authentication.UserName).then(() => {
                // res.send(data);
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: authentication.UserID }, process.env.TOKEN_SECRET, {
                    expiresIn: expiresIn
                });

                //users.token = accessToken
    

                res.status(200).send({
                    "user": authentication, "accessToken": accessToken, "expires_in": expiresIn
                });

            }).catch((error) => {
                console.log(error);
                return res.status(500).send('Server error!');
            })


        })
        .catch((error) => {
            console.log(error);
        });
}


authenticationInfo = {}

function loginAuthentication(req, res) {
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    
    authenticationDao.findByUserName(UserName)
        .then((data) => {
            console.log(data)
            enteredPassword = data.Password;
            console.log(enteredPassword);
            const result = bcrypt.compareSync(Password, enteredPassword);
            if (!result) return res.status(401).send('Password not valid!');
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: data.UserID, role: data.RoleID }, process.env.TOKEN_SECRET, {
                expiresIn: expiresIn
            });
            authenticationInfo = data;
            res.status(200).send({
                "user": data,
                "accessToken": accessToken,
                "expires_in": expiresIn
            });
        })
        .catch((error) => {
            console.log(error);
            return res.status(404).send('User not found!');
        });
}

function getAllAuthentications(req, res){

    authenticationDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = authenticationController;