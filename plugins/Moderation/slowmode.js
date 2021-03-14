module.exports = {
    name: 'slowmode',
    permissions:["MANAGE_CHANNELS"],
    description: 'Sets SlowMode for a Channel',

    async execute(client, message, args){

    if (!args[0]) return message.channel.send('Please enter the number you want the slowmode to be set to');
    
    if(isNaN(args[0])) return message.channel.send('Please type a real number!');
    
    if (args[0] > 21600 || args[0] < 1) return message.channel.send('Number must be between 1 - 21600');

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        message.channel.send(`slowmode is now: \`${args[0]} secondes\` `).then(message => message.delete({timeout: 5500}));
        return;

        message.channel.send(`slowmode is now: ${args[0]}`);
    
    }
}