//Require Dependencies
var path = require("path");
var db = require("../connection.js");

// Routes
// 1. At the root path, render a landing page
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/assets/landing_page/landing_page.html"));
    });

    app.post("/", function(req, res) {
        var newsInfo = new Schema(req.body);
        newsInfo.save(function(error, doc) {
            if (error) {
                res.send(error);
            }
            // Otherwise, render the handlebars page
            else {
                console.log(newsInfo);
                res.render("index", { index: news });
            }
        });
    });

    // 2. At the "/articles" path, display every entry in the collection
    app.get("/articles", function(req, res) {
        // Query: In our database, go to the news collection, then "find" everything
        db.articles.find({}).then(function(news) {
            console.log(news);
            res.render("index", { index: news });
        }).catch(function(error) {
            console.log(error);
        });
    });

};
