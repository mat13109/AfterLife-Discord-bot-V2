function OnMessage(bot, user, userID, channelID, message, evt) {

    // The arguments from the command sent
    var args = message.substring(1).split(' ');

    // Storing the first argument
    var cmd = args[0];

    // Removing the first character
    args = args.splice(1);

    switch (cmd) {
        // /test command
        case 'test':
            // Sends a message
            bot.sendMessage({
                to: channelID,
                message: 'Ok.'
            });
            return true; // Function stops here
    }
}

// Can be used from the outside
module.exports = { OnMessage }
