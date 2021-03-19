const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', () => {
  console.log('I am ready!');
});
bot.login('process.env.token');

bot.on('message', (message) => {
	if (message.content == '?time') {
		var data = new Date();
		var ora = data.getHours();
		var minuto = data.getMinutes();

		message.channel.send('ORA ATTUALE :alarm_clock: :' + ora + ':' + minuto);
	}
});



bot.on("message", (message) => {
    if (message.content.startsWith("?ban")) {
        var utenteBan = message.mentions.members.first();

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send(' > You dont have permission to run this command!');
            return;
        }

        if (!utenteBan) {
            message.channel.send('> Please mention the user you wont to ban!');
            return;
        }

        if (!utenteBan.kickable) {
            message.channel.send(' > I dont have the permission!');
            return;
        }

        utenteBan.ban()
            .then(() => message.channel.send("<@" + utenteBan + ">" + "has been banned!"))

    }
})


bot.on("message", (message) => {
    if (message.content.startsWith("?kick")) {
        var utenteKick = message.mentions.members.first();

        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send(' > You dont have permission to run this command!');
            return;
        }

        if (!utenteKick) {
            message.channel.send('> Please mention the user you wont to kick!');
            return;
        }

        if (!utenteKick.kickable) {
            message.channel.send(' > I dont have the permission!');
            return;
        }

        utenteKick.kick()
            .then(() => message.channel.send("<@" + utenteKick+ ">" + "has been kicke"))
    }
})

bot.on("message", message => {
    if (message.content.startsWith("?purge")) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send('> You dont have the permission for to execute this command');
            return;
        }
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send(' > I dont have the permission for to execute this command');
            return;
        }

        var count = message.content.slice(7);
        count = parseInt(count);

        if (!count) {
            message.channel.send(" > Please enter a valid number")
            return
        }

        message.channel.bulkDelete(count, true)
        message.channel.send(count + "The message has been cut").then(msg => {
            msg.delete({ timeout: 5000 })
        })

    }
})



                                    