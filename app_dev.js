//app_dev.js
//import fetch from "node-fetch";
//Express instance
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

//api_route module being used in this file so that creating new routes is easier in the future.
var api_routes = require('./app_routes.js');
app.use('/api', api_routes);

app.use('/home',express.static('front_end'));

app.listen(port, function() {
  console.log('Example app listening on port 3000!');
});
