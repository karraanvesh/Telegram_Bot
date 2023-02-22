const { Telegraf } = require('telegraf');
const axios = require('axios');

/**
 * How to get the secret token for creating a bot
 * 
 * -> Open telegram and search for bot father
 * -> To read instructions type /start press enter
 * -> To create a new bot type /newbot and press enter
 * -> It will ask for a bot name , give a bot name without a / , ex : coding_bot
 * -> then it will ask for a username ending with bot , ex : coding_Anvesh_searchingAlgos_bot
 * // url : t.me/coding_Anvesh_searchingAlgos_bot
 */

let binarysearch = `
let iterativeFunction = function (arr, x) {
  
    let start=0, end=arr.length-1;
         
    // Iterate while start not meets end
    while (start<=end){
 
        // Find the mid index
        let mid=Math.floor((start + end)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}
`

const bot = new Telegraf('6034480894:AAFrEOXslghn4GTh0Ni-zFc_obTY3KthyGU');

bot.start((ctx) => ctx.reply('Welcome to the new telegram bot from Anvesh'));

bot.command('binarysearchjs' , (ctx) => ctx.reply(binarysearch));
bot.command('whomadethis' , (ctx) => ctx.reply('Anvesh'));

bot.on('sticker' , (ctx) => ctx.reply('❤️'));

bot.launch();