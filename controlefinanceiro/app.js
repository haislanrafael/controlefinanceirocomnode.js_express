// IMPORTANDO O EXPRESS
var express = require('express');


//APP
var app = express();


// especificando o local do css
app.use(express.static(__dirname + '/pasta'));


app.get('/', function(req,res){
    res.sendFile(__dirname + '/page.html');
})


// SERVIDOR

app.listen(8080);


