client.on('message', msg => {

    if (msg.content == ',join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})

client.login(process.env.BOT_TOKEN);
