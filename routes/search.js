const router = require("express").Router();
var connection = require('../mysqlConnection');
const fs = require('fs');
let cheerio = require('cheerio-httpcli');



router.get("/", (req, res) => {
    console.log(cheerio);
    let keyword = req.query.keyword || "";
    if(keyword != ""){
        function search(searchWord) {
          let data = [];
          (async () =>{
              for(let i = 1; i <= 1; i += 1){
                  var { $ } = await cheerio.fetch('https://crowdworks.jp/public/jobs/u/all?utf8=%E2%9C%93&order=&category=jobs&keep_search_criteria=true&utf8=%E2%9C%93&search%5Bkeywords%5D=' + searchWord, { page: i }); 
                      const ankers = $('.item_body');
                      for(let n = 0; n < ankers.length; n += 1){
                          let tmp1 = $('.item_title').eq(n).text();
                          let title = tmp1.replace( /\n| /g , "" );
                          let url = 'https://crowdworks.jp' + $('.item_title a').eq(n).attr("href");
                          let tmp2 = $('.payment .inner_cell').eq(n).text();
                          let payment = tmp2.replace( /\n| /g , "" );
                          let tmp3 = $('.entries .inner_cell').eq(n).text();
                          let entries = tmp3.replace( /\n| /g , "" );
                          let tmp4 = $('.expires .inner_cell').eq(n).text();
                          let expires = tmp4.replace( /\n| /g , "" );
              
                          data.push({
                              title: title,
                              url: url,
                              payment: payment,
                              entries:entries,
                              expires:expires
                          });
                      }
              } 
              fs.writeFileSync('output.json',JSON.stringify(data),'utf8');
              let tmpfile = fs.readFileSync('output.json','utf8');
              let tmp = JSON.parse(tmpfile || "null");
              let list = {list:tmp};
              res.render("./index.ejs",list);
          })();
        }
        search(keyword);

    }else{
      let list = {list:[{
          title: 'unknown',
          url: '',
          payment: '',
          entries:'',
          expires:''
        }]
      };
      res.render("./index.ejs",list);
    }
});

module.exports = router;