const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerName : {
        type: String,
        required: true,
        minLength: [5, "Name must be at least 5 characters long! "]
    },
    position: {
        type: String,
        required: true,
        minLength: [4, "Position must be at least 4 characters long!"]
    }, 

}, {timestamps :true},)

module.exports= mongoose.model('Player', PlayerSchema);