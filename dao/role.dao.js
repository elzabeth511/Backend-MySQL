const Role = require('../models/role');
var roleDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateRole: updateRole
}

function findAll() {
    return Role.findAll();
}

function findById(RoleID) {
    return Role.findByPk(RoleID);
}

function deleteById(RoleID) {
    return Role.destroy({ where: { RoleID: RoleID } });
}

function create(role) {
    var newRole = new Role(role);
    return newRole.save();
}

function updateRole(role, RoleID) {
    var updateRole = {
        RoleName: role.RoleName,
        Description : role.Description
    };
    return Role.update(updateRole, { where: { RoleID: RoleID } });
}
module.exports = roleDao;