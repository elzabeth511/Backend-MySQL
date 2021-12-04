// User.dao

const Authentication = require('../models/authentication');

var authenticationDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,

    findByUserName : findByUserName
   // updateAuthentication: updateAuthentication
}

function findAll() {
    return Authentication.findAll();
}

function findById(UserID) {
    return Authentication.findByPk(AuthenticationID);
}

function findByUserName(UserName){
    return Authentication.findOne({
        where:{ UserName : UserName}
    }
    );
    
}

function deleteById(UserID) {
    return Authentication.destroy({ where: { UserID: UserID } });
}

function create(authentication) {
    var newAuthentication = new Authentication(authentication);
    return newAuthentication.save();
}

// function updateAuthentication(authentication, AuthenticationID) {
//     var updateAuthentication = {
//         UserName : authentication.UserName,
//         Password : authentication.Password,
//         RoleID :  authentication.RoleID
//     };
//     return Authentication.update(updateAuthentication, { where: { AuthenticationID: AuthenticationID } });
// }
module.exports = authenticationDao;