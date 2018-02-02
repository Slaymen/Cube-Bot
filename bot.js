const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.); 
  client.user.setGame(+help | i am on ${client.guilds.size} servers);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
