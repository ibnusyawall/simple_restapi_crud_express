var express    = require('express');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var Task = require('./api/models/todoListModel');

app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(8080, (err) => {
	if (err) throw err;
	console.log('[!] connect on port 8080');
});
