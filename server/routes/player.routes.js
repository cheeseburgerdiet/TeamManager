const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api', PlayerController.index);
    app.get('/api/players', PlayerController.showAll);
    app.post('/api/players/new', PlayerController.create);
    app.delete('/api/players', PlayerController.delete);
}