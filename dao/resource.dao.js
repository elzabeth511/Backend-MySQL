const Resource = require("../models/resource");
var ResourceDao = {
    create: create,
    findAllResource: findAllResource,
    findResourceById: findResourceById,
    updateResource: updateResource,
    deleteResource: deleteResource
}


function create(resource) {
    var newResource = new Resource(resource);
    return newResource.save();
}
function findAllResource() {
    return Resource.findAll();
}
function findResourceById(id){
    return Resource.findByPk(id);
}
function updateResource(resource, id){
    var updatedResource = {
        resource_name: resource.resource_name,
        thumbnail: resource.thumbnail,
        status: resource.status,
        rent: resource.rent
    };
    return Resource.update(updatedResource, { where: { resource_id: id } });
}

function deleteResource(id) {
    return Resource.destroy({ where: { resource_id: id } });
}
module.exports = ResourceDao;