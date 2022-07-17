const request = require('request');
const cheerio = require('cheerio');
const allMatchObj =  require("./allMatch");
// const pretty = require("pretty");
// const axios = require("axios");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url,cb);
function cb(err,res,body){
    if(err) console.log(err +"error");
     // Body contains the HTML 
    
    else handleHtml(body);
}

function handleHtml(html){
    // load markup in cheerio using the cheerio.load 
    let selecTool  = cheerio.load(html);
    // console.log((selecTool.html()));
    let anchorElem_temp= selecTool('span[class="ds-text-tight-m ds-font-bold"]')
    let  anchor_for_link  = selecTool('a[class = "ds-block ds-text-center ds-uppercase ds-text-ui-typo-primary ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block"]')
    let relativeLink =  anchor_for_link.attr("href");
    // console.log(relativeLink);
    let fullLink = "https://www.espncricinfo.com" + relativeLink;
    // console.log(fullLink);
    allMatchObj.getAllMatch(fullLink);
    // console.log(anchorElem_temp.html());
    // console.log(attr);
}
// /series/ipl-2020-21-1210595/match-results