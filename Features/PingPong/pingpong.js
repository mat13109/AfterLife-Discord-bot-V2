function CheckPingPong(bot, channelID, message) {

    // The arguments from the command sent
    var args = message.substring(1).split(' ');

    // Storing the first argument
    var cmd = args[0];

    // Removing the first character
    args = args.splice(1);

    switch (cmd) {
        // !ping command
        case 'ping':
            // Sends a message
            bot.sendMessage({
                to: channelID,
                message: 'Pong!'
            });
            return true; // Function stops here
    }
}

// Can be used from the outside
module.exports = { CheckPingPong }
