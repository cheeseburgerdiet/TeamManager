const Player = require('../models/player.model');

module.exports = { 
    showAll: (req, res) => {
        Player.find()
            .then((allPlayers) => {
                console.log(allPlayers);
                res.json(allPlayers);
            })
            .catch((err) => {
                console.log("error in showAll: " + err);
                res.json(err);
            })
    },

    create: (req, res) => {
        Player.create( req.body )
            .then((newPlayer) => {
                console.log(newPlayer);
                res.json(newPlayer);
            })
            .catch((err) => {
                console.log("error in create: " + err);
                res.json(err);
            })
    },

    delete: (req, res) => {
        console.log(req.params.id)
        Player.findByIdAndRemove(req.params.id)
            .then((removedPlayer)=> {
                console.log(removedPlayer);
                res.json(removedPlayer);
            })
            .catch((err)=> {
                console.log("err in delete: " +err);
                res.json(err);
            })
    },
}