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
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
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
    .setState('LeVaneEmpire')
    .setName('Jei')
    .setDetails(`Luna is Cute`)
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1103492118913224785/1227831994264588388/5210BA8D-D7FD-4E08-97E3-3E5E382BC6D9.gif?ex=6629d6a7&is=661761a7&hm=40709eb5fe274354e98f4947210cf0fac6e58dd44e252f811841f889b6300cee&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Baby, you take my breath away.')
    .setAssetsSmallText('Fuck that nigga Nyx...') //Text when you hover the Small image
    .addButton('Pain', 'https://open.spotify.com/track/34RdcQ0rkkbdjbx7ks6BJF?si=3135c7e4fc524462')
    .addButton('Hoyo Noise', 'https://open.spotify.com/track/49xooPdasAQlKhW6Sf1Rhq?si=a7c5656af30e41be');
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
