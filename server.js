var express = require("express");

var app = express();

app.use(express.static('public'));

//make way for some custom js and images
//app.use('/js', express.static(__dirname + '/public/js'));
app.use('/', express.static('manifest.webmanifest'));
app.use('/images', express.static(__dirname + '/public/images'));

var server = app.listen(5000, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
