const { response } = require("express");
const ResourceDao = require("../dao/resource.dao");
var ResourceController = {
    addResource: addResource,
    findResource: findResource,
    findResourceById: findResourceById,
    updateResource: updateResource,
    deleteResourceById: deleteResourceById
}

function addResource(req, res) {
    let resource = req.body;
    ResourceDao.create(resource)
        .then((data) => {
            res.status(200).json({
                message: "success",
                data: data
            });
        })
        .catch((error) => {
            res.status(400).json({
                message: "failed",
                reason: error
            })
        });
}

function findResourceById(req, res) {
    ResourceDao.findResourceById(req.params.id)
        .then((data)=>{
            res.status(200).json({
                message:"success",
                data:data
            })
        })
        .catch((error)=>{
            res.status(400).json({
                message:"failed",
                reason:error
            })
        })
    
}

function deleteResourceById(req, res) {
    ResourceDao.deleteResource(req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "success",
                data: data
            })
        })
        .catch((error) => {
            res.status(400).json({
                message: "failed",
                reason: error
            })
        })
}

function updateResource(req, res) {
    ResourceDao.updateResource(req.body,req.params.id)
        .then((data)=>{
            res.status(200).json({
                message:"updated successfully",
                data:data
            })
        })
        .catch((error)=>{
            res.status(400).json({
                message:"failed",
                reason:error
            })
        })
    
}

function findResource(req, res) {
    ResourceDao.findAllResource()
        .then((data) => {
            res.status(200).json({
                message: "success",
                data: data
            })
        })
        .catch((error) => {
            res.status(400).json({
                message: "failed",
                reason: error
            });
        })
}

module.exports = ResourceController;