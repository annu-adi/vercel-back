
let express = require ('express');
let app=express();
app.get('/', function (req, res){
    res.send('this is message from the server side');
});
app.get('/home', function (req, res){
    res.send('this is nessage from the server for the home page');
});
app.listen(3000);

