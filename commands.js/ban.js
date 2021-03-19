client.on("message", (message) => {
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
client.login('ODIxMDYxNjczNTAyMzc1OTU4.YE-PRQ.B2IlEtl8nWxOrOSVrthxuMiFNVI')