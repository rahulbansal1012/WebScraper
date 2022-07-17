const request  = require('request');
const cheerio = require('cheerio');
request("https://www.worldometers.info/coronavirus/",cb);
function cb(err , res ,body){
    console.log(err);
    console.log(res);
    console.log(body);
}
