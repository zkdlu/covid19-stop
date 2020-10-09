const request = require('request');
const cheerio = require('cheerio');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var array = Array();
var idx = 1;

rl.on('line', (line) => {
    const info = array[idx];

    try {

        let result = info.split('\n');
        const len = result.length;

        for (let i = 0; i < len; i++) {
            const line = result[i];
            if (!line.startsWith('\t')) {
                console.log(line);
            }
        }
    } catch {
        console.log(info);
    }
    
    // const no = patient('.corona19_no').text();
    // console.log('no-> ' + no);

    // const name = patient('.tdl p').text();
    // console.log('name-> ' + name);
  
    idx++;
  })
  .on('close', function () {
    process.exit();
});

const url = 'https://www.seoul.go.kr/coronaV/coronaStatus.do';
request(url, function(error, response, html){
    if (error) {throw error};

    const $ = cheerio.load(html);
    $('.patient').each((key, val ) => {
        let result = $(val).html();
        
        if (!result.includes('확인중')) {
            array.push(result);
        }
    })
});