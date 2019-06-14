const objectId = require("mongodb").ObjectID;

module.exports = function(app, db) {
    app.get('/', async (req, res) => {
        const result = await db.collection('postList').find().toArray();
        res.render('layout', {result : result});
    })
        .get('/posts/:id', async (req, res) => {
            const id = objectId(req.params.id);
            const result = await db.collection('postList').findOne({_id: id});
            res.send(result);
        })
};
