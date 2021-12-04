const resourceEnquiryDao = require('../dao/resourceEnquiry.dao');
var resourceEnquiryController = {
    addResourceEnquiry: addResourceEnquiry,
    findResourceEnquirys: findResourceEnquirys,
    findResourceEnquiryById: findResourceEnquiryById,
    updateResourceEnquiry: updateResourceEnquiry,
    deleteById: deleteById
}

function addResourceEnquiry(req, res) {
    let book = req.body;
    resourceEnquiryDao.create(book).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findResourceEnquiryById(req, res) {
    resourceEnquiryDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    resourceEnquiryDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "ResourceEnquiry deleted successfully",
                book: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateResourceEnquiry(req, res) {
    resourceEnquiryDao.updateResourceEnquiry(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "ResourceEnquiry updated successfully",
                book: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findResourceEnquirys(req, res) {
    resourceEnquiryDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = resourceEnquiryController;