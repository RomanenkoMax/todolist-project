const AddPost = require('./app/posts/add');
const ReadOnePost = require('./app/posts/readOnePost');
const ReadAllPosts = require('./app/posts/main-page');
const DeleteAllPosts = require('./app/posts/delAllPosts');

module.exports = (app, db) => {
    AddPost(app, db);
    ReadOnePost(app, db);
    ReadAllPosts(app, db);
    DeleteAllPosts(app, db)
}
