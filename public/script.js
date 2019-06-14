
$("table").on("click", ".editPost", (e) => {
    // e.preventDefault();
    console.log(e.target.attributes['data-id'].value);
    let id = e.target.attributes['data-id'].value;
    GetPost(id);
});
function GetPost(id) {
    $.ajax({
        url: "/posts/"+id,
        type: "GET",
        contentType: "application/json",
        success: (post) => {
            let form = document.forms["postForm"];
            form.elements["id"].value = post._id;
            form.elements["postName"].value = post.title;
            form.elements["postBody"].value = post.body;
        }
    });
}
function CreatePost(title, body) {
    $.ajax({
        url: "/posts",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify({
            title: title,
            body: body
        }),
        // success: () => {window.location.replace("/")}
    })
}

$("form").submit((e) => {
    e.preventDefault();
    console.log(e.target.elements["postName"].value);
    let id = e.target.elements["id"].value;
    let title = e.target.elements["postName"].value;
    let body = e.target.elements["postBody"].value;
    if (id == 0){
        CreatePost(title, body);
    }

})