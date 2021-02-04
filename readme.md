# AfterLife Discord Bot
## Project Management
[Public Codecks](https://open.codecks.io/afterlife-discord-bot)
## Use
### Install
Install Node.js  
Reboot  
run "npm install discord.io winston glob -save"  
Create "auth.json"  
Add the following:  
```
{
    "token": "{YourBotToken}"
}
```
### Run
run "node afterlife.js"  
### Stop
Ctrl + C to stop.  
## Progam new features
### To-know
At this point in time, the bot can only react to message.  
### How-to
Create a new folder in Features and a .js file inside it  
Add the following:  
```
function OnMessage(bot, user, userID, channelID, message, evt) {
    // Code here
}

// Can be used from the outside
module.exports = { OnMessage }
```
Code.  
