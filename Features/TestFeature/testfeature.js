var Constants = require('./../../Data/constants.json')

function OnMessage(bot, user, userID, channelID, message, evt) {

    // The arguments from the command sent
    var args = message.split(' ');

    // Storing the first argument
    var cmd = args[0];

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
