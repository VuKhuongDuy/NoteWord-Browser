var express=  require('express');

var app = express();

app.use(express.static('public'));
app.set("view engine","ejs");
app.set('views','./views');

var server = require('http').Server(app);
server.listen(process.env.PORT||3000);

app.get('/',function(req,res){
    res.render('home');
})
// var JSZip = require('jszip')
// var zip = new JSZip();
// var img = zip.folder("img");
// img.file("1.jpg", imgData, {base64: true});
 
// zip.generateAsync({type:"blob"}).then(function(content) {
//     // see FileSaver.js
//     saveAs(content, "example.zip");
// });

// console.log(zip)
 