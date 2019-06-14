module.exports = function(app, db) {
    app.post('/posts', async (req, res) => {
        if(!req.body) return res.status(400);
        let title = req.body.title;
        let body = req.body.body;
        let post = {title: title, body: body};

        await db.collection('postList').insertOne(post, (err, result) => {
            if (err) console.log(err);
            res.redirect("/");
            //db.close()
        })
    })
}
