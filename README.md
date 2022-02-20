# SimpleDiscordBots

This repository contains basic Discord bots that do simple tasks based on user input in a Discord server.

To run each bot:
  * download the latest version of node.js: https://nodejs.org/en/
  * create an application and bot using Discord's developer suite: https://discord.com/developers/applications
  * Add the files for each bot into a folder of your choosing
  * replace the token in auth.json with your bot's token
  * open the command line, navigate to your folder, and add the following packages:
    * npm install discord.io winston -–save
    * npm install https://github.com/woor/discord.io/tarball/gateway_v6
  * type "node bot.js" in your folder to run the bot

## RockPaperScissors

A simple bot that plays rock paper scissors against you. type !rock !paper or !scissors and see if you can win!
