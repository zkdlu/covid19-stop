const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/page');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

router.get('/',function(req,res){
    res.render('map.html');
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');