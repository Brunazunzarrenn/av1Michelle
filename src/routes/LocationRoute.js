const LocationController = require('../controllers/LocationController');

module.exports = function (application) {

    application.get('/location', LocationController.getAll);
        // - consulta todas as localizações.

    application.get('/location/:id', LocationController.getOne);
    // – consulta uma localização expecífica por ID.

    application.post('/newlocation', LocationController.create);
    // - insere no formato JSON uma nova localização.

    application.put('/updatelocation;:id', LocationController.update);
    // - atualiza uma localização expecífica por ID.

    application.delete('/deletelocation/:id', LocationController.delete);
    // – exclui uma localização expecífica por ID.

}