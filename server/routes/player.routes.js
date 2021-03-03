const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api/players', PlayerController.showAll);
    app.post('/api/players', PlayerController.create);
    app.delete('/api/players/:id', PlayerController.delete);
}