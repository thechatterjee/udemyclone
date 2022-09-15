const express = require("express"); // import  Default Express Framework
require("dotenv").config();
const bodyParser = require("body-parser"); // import body parser for buffering data || 3rd party buffering data library

const App = express(); // Running || Call Framework

//const DB = require("../Config/databseConfig") // DB CONNECTION CHECK

//For Aplication/Json Output parser || Content type Application/Json
const JsonParser = bodyParser.json(); // response parser ||For Api JSON Response output

// try{
//     DB.authenticate();
//     console.log("database connection successfully");
// } catch(err){
//     console.log("DB Error", err);
// }

App.use(JsonParser);


module.exports = App;