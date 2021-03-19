client.on("message", (message) => {
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
            .then(() => message.channel.send("<@" + utenteKick+ ">" + "has been kicked!"))

    }
})
client.login('ODIxMDYxNjczNTAyMzc1OTU4.YE-PRQ.B2IlEtl8nWxOrOSVrthxuMiFNVI')