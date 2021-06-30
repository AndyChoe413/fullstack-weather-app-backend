const Weather = require("../model/Weather")

async function getAllLocations(req, res) {
    try {
        let allLocations = await Weather.find({})
        res.json({payload: allLocations})
    } catch (e) {
        res.status(500).json({ message: e.message, error: e})
    }
}

async function addLocation(req, res) {
    try {
        let addLocation = new Weather({
            city: req.body.city,
            country: req.body.country
        })
        let savedLocation = await addLocation.save()
        res.json({payload: savedLocation})
    } catch (e) {
        res.status(500).json({message: e.message, error: e})
    }
}

async function deleteLocationById(req, res) {
    try {
        let deletedLocation = await Weather.findByIdAndRemove(req.params.id)
        res.json({ payload: deletedLocation})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: e.message, error: e})
    }
}

module.exports = {
    getAllLocations,
    addLocation,
    deleteLocationById
}