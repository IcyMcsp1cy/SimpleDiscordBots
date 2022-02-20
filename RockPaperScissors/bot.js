var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
token: auth.token,
autorun: true
});
bot.on('ready', function (evt) {
logger.info('Connected');
logger.info('Logged in as: ');
logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {

// Our bot needs to know if it will execute a command
// It will listen for messages that will start with `!`
if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];
    args = args.splice(1);
    var response = '';
    var rockPaperScissors = Math.floor(Math.random() * 3);
    switch(cmd) {
        case 'rock':
            if (rockPaperScissors == 0) {
		response = 'I picked rock. We tied!';
	    }
            if (rockPaperScissors == 1) {
		response = 'I picked paper. You lose!';
	    }
            if (rockPaperScissors == 2) {
		response = 'I picked scissors. You win!';
	    }
	break;
	case 'paper':
            if (rockPaperScissors == 0) {
		response = 'I picked rock. You win!';
	    }
            if (rockPaperScissors == 1) {
		response = 'I picked paper. We tied!';
	    }
            if (rockPaperScissors == 2) {
		response = 'I picked scissors. You lose!';
	    }
	break;            
	case 'scissors':
            if (rockPaperScissors == 0) {
		response = 'I picked rock. You lose!';
	    }
            if (rockPaperScissors == 1) {
		response = 'I picked paper. You win!';
	    }
            if (rockPaperScissors == 2) {
		response = 'I picked scissors. We tied!';
	    }            
        break;
    }
    bot.sendMessage({
                to: channelID,
                message: response
            });
 }
});