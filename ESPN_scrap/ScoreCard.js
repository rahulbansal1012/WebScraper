const request = require('request');
const cheerio = require('cheerio');
// const { getAllMatch } = require('./allMatch');

function getInfoFromScoreCard(url) {
   
    request(url, cb);
}
function cb(err,res,body){
    if(err){
        console.log(err);
    }
    else {
        getAllMatchDetail(body)
    }
} let i = 0 ;
function getAllMatchDetail(html){
    let selecTool =  cheerio.load(html);

    // 1.) get loc of match
    let loc  = selecTool('div [class ="ds-text-tight-m ds-font-regular ds-text-ui-typo-mid"]')
    // console.log((i++) +" " + loc.text());
}
module.exports = {
    gifs : getInfoFromScoreCard
}