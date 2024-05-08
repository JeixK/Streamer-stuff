const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/Los_Angeles', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1227824143035138048')
    .setType('STREAMING')
    .setURL('https://discord.com/channels/@me/1103492118913224785/1227830311862272032') //Must be a youtube video link 
    .setState('JeixK')
    .setName('Jei')
    .setDetails(`Luna is Cute`)
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1007335694131265586/1237913384326926397/IMG_5652.gif?ex=663d602e&is=663c0eae&hm=1fecdef8f8cfe24fba917c062976bb3981a1cffae7bf94ccca8030714a1eafaa&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Baby, you take my breath away.')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1007335694131265586/1237913473321537567/IMG_5632.png?ex=663d6043&is=663c0ec3&hm=41bc62831589538495c8e55cca21de8b47ab4b8f4c3930b0b55fe2dfdab6415d&')
    .setAssetsSmallText('Fuck that nigga Nyx...') //Text when you hover the Small image
    .addButton('Pain', 'https://open.spotify.com/track/34RdcQ0rkkbdjbx7ks6BJF?si=3135c7e4fc524462')
    .addButton('Hoyo Noise', 'https://open.spotify.com/track/49xooPdasAQlKhW6Sf1Rhq?si=a7c5656af30e41be');
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
      client.user.setActivity(r);
  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
