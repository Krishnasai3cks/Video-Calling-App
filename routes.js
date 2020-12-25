module.exports = function(app, dir) {
    app.route("/").get((req, res) => {
        res.sendFile(dir + "/views/index.html");
    });
};