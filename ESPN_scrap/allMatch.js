const request = require('request');
const cheerio = require('cheerio');
const gifs = require('./ScoreCard');


let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
function getAllMatch(url) {
    // console.log(url);
    request(url, cb);
}

function cb(err, res, body) {
    if (err) console.log(err + "error");
    // Body contains the HTML 

    else extract_all_scroe_card_link(body);
}

//   extract the score card link 
function extract_all_scroe_card_link(html) {
   
    
    let selecTool = cheerio.load(html);
   
    let Score_Card_array= selecTool('span[class="ds-text-compact-xs ds-font-medium"]')
    // let Score_Card_array_cotent = selecTool('a[class="ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block"]');
   let Score_Card_array_cotent = selecTool(".ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block.ds-text-compact-xs ds-font-medium");
    console.log(Score_Card_array.length);

    for(let i = 0 ;i < Score_Card_array_cotent.length ; i++){
                //  link of score code
        let ScoreCardlink = selecTool(Score_Card_array_cotent[i]).attr("href");
//   console.log(i + " " +ScoreCardlink);
        //  full link for computing the data
let fullLink = "https://www.espncricinfo.com"+ScoreCardlink;
//    calling  score card info method
console.log(fullLink +"yes");
// gifs.gifs(fullLink);

        
        
    }
}










module.exports = {
    getAllMatch: getAllMatch
}