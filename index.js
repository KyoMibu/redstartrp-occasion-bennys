const Discord = require('discord.js');
const bot = new Discord.Client();
const keepAlive = require('./server.js');
keepAlive();
var servers = {};

bot.on('guildMemberAdd', guildMember =>{
    var role = guildMember.guild.roles.find('name','client');
    guildMember.addRole(role)
})
bot.login(config.token);
