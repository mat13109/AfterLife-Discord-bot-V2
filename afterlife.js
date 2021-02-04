//#region Includes
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Our features
var PingPong = require('./Features/PingPong/pingpong');
//#endregion

//#region Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
//#endregion

//#region Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
//#endregion

//#region Start
bot.on('ready', function (evt) {
    // logger.info('Connected');
    // logger.info('Logged in as: ');
    // logger.info(bot.username + ' - (' + bot.id + ')');
});
//#endregion

//#region On Message event
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '/') {

        if (PingPong.CheckPingPong(bot, channelID, message)) return;

    }
});
//#endregion
