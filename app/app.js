const express               =   require("express");
require('dotenv').config();
const config                =   require('./config');
const app                   =   express();


var a = 'Node.Js' ;
//Include main server file with passing app & config :-
require('./src/server')(app, config, a);