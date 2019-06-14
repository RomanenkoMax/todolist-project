const ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {
    app.get('/readOne', (req, res) => {
        // const postID = ObjectID(req.params.postID)

        //5cf16bd7d74fcd30d82005c3
        //db.collection('postList').findOne({_id: postID}, (err, result) => {
        db.collection('postList').findOne({title: 'Title'}, (err, result) => {
            if (err) console.log(err)

            console.log(result)
            res.send(result)
        })
    })
}
