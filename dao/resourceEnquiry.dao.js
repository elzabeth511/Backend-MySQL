const ResourceEnquiry = require('../models/resourceEnquiry');
var resourceEnquiryDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateResourceEnquiry: updateResourceEnquiry
}

function findAll() {
    return ResourceEnquiry.findAll();
}

function findById(resource_enquiry_id) {
    return ResourceEnquiry.findByPk(resource_enquiry_id);
}

function deleteById(resource_enquiry_id) {
    return ResourceEnquiry.destroy({ where: { resource_enquiry_id: resource_enquiry_id} });
}

function create(resourceEnquiry) {
    var newResourceEnquiry = new ResourceEnquiry(resourceEnquiry);
    return newResourceEnquiry.save();
}

function updateResourceEnquiry(resourceEnquiry, resource_enquiry_id) {
    ResourceEnquiry.findByPk(resource_enquiry_id).then(data=>{
        previous=data.status
    })
    var updateResourceEnquiry = {
       resource_name: resourceEnquiry.resource_name,
       enquirer_name: resourceEnquiry.enquirer_name,
       enquirer_email: resourceEnquiry.enquirer_email,
       enquirer_phone: resourceEnquiry.enquirer_phone,
       status: resourceEnquiry.status,
       previous_status: previous

       
    };
    return ResourceEnquiry.update(updateResourceEnquiry, { where: { resource_enquiry_id: resource_enquiry_id} });
}
module.exports = resourceEnquiryDao;