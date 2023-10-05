const mongoDb = require('../src/MongoDbConect');


class UserController {

    async getAll (req, res){
        
        try {

            result = mongoDb.findAll();


            return res.status(200).json(result);

        } catch (e) {

            console.error(e.message);
            return res.status(500).json({ error: 'Internal error' })

        }
    
    }
    async getOne (req, res){

        try {

            const { id } = req.params;

            const result = mongoDb.findOne(id);

            return res.status(200).json(result);

        } catch (e) {

            console.error(e.message);
            return res.status(500).json({ error: 'Internal error' })

        }
        
    }
    async create (req, res){

        try {

            const { name, position} = req.body;

            const result = mongoDb.insert(name, position);

            return res.status(201).json(result);

        } catch (e) {

            console.error(e.message);
            return res.status(500).json({ error: 'Internal error' })

        }
        
    }

    async update (req, res){

        
        try {

            const { id } = req.params;


            const { name, position} = req.body;

            const result = mongoDb.update(id, {name, position});

            return res.status(201).json(result);

        } catch (e) {

            console.error(e.message);
            return res.status(500).json({ error: 'Internal error' })

        }
        
    }
    async delete (req, res){

        
        try {

            const { id } = req.params;

            const result = mongoDb.deleteOne(id);

            return res.status(200).json(result);

        } catch (e) {

            console.error(e.message);
            return res.status(500).json({ error: 'Internal error' })

        }
        
    }
}




module.exports = new UserController();