function CheckPingPong(bot, channelID, message) {

    var args = message.substring(1).split(' ');
    var cmd = args[0];

    args = args.splice(1);

    switch (cmd) {
        // !ping
        case 'ping':
            bot.sendMessage({
                to: channelID,
                message: 'Pong!'
            });
            return true;
    }
}

module.exports = { CheckPingPong }