const {prefix, token} = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

function roll(number) {
  return Math.floor(Math.random() * (number-1+1)+1);
}

function isValidDie(number) {
  return number % 2 === 0 && (number > 3 && number < 21) || number === 100;
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
	
	if (command === 'rolld'){
	  var die = parseInt(args[0]);
		args.shift();
	  var reason = args.join(' ');
	  if (isValidDie(die)) {
	    message.channel.send(`${message.author.username} rolled a: ${roll(die)} for ${reason}`);
	  } else {
	    message.channel.send('Invalid die!');
	  }
	}

});

client.login(token);