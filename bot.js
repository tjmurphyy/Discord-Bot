/*{
  "id": "41771983423143936",
  "name": "pog bot that sings",
  "color": 3447003,
  "hoist": true,
  "position": 1,
  "permissions": "36953088",
  "managed": false,
  "mentionable": true
};
*/
console.log("beep beep!");

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
    console.log("Logged in as", client.name, "!");
}

const replies = ['pogfail',
'clownchamp 🤡',
'6x back-to-back pogchamp of Clapville, USA',
'blessedchamp',
'abortionchamp',
'pog',
'uglychamp',
'Ask me to sing a song!',
'Do you like imagine dragons?']


client.on('message', gotMessage);

 function gotMessage(msg) {

 if(msg.author.bot) {
     return
   }

    let wordArray = msg.content.split(' ');
  if (msg.content === 'pog bot') {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
  }
  if (msg.content === 'sing a song') {
      msg.channel.send('no 😎');
  }
  if(wordArray != null) {
  for(var i = 0; i < wordArray.length; i++) {
  if (wordArray[i] === 'dragon') {
      msg.channel.send('dragon my balls across yo chin');
  }
  if (wordArray[i] === ('dip')) {
        msg.channel.send('dip my balls in yo mouth');
  }
  if (wordArray[i] === ('peter')) {
          msg.channel.send('peter nutsack');
  }
  if (wordArray[i] === ('luke')) {
            msg.channel.send('luke ballsack, owner of shit and cum innovations Ltd');
  }
  if (wordArray[i] === ('yankees')) {
              msg.channel.send('yank on these nuts');
  }
  if (wordArray[i] === ('wendys')) {
              msg.channel.send('you look like a chipmunk wendys nuts are in yo mouth');
  }
if (wordArray[i] === ('tulips')) {
   msg.channel.send('yo momma got two lips on my shaft');
  }
  if (wordArray[i] === ('tulip')) {
     msg.channel.send('yo momma got two lips on my shaft');
    }
  if (wordArray[i] === ('flower')) {
     msg.channel.send('my favorite flower is a tulip');
     msg.channel.send('because yo momma got two lips on my shaft');
    }
    if (wordArray[i] === ('flowers')) {
         msg.channel.send('my favorite flower is a tulip');
         msg.channel.send('because yo momma got two lips on my shaft');
        }
  if (wordArray[i] === ('suck')) {
     msg.channel.send('yo grandpappy suck on these balls');
    }
    }
    }
}
