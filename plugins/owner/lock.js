module.exports = {
    name: 'lock',
    permissions:["MANAGE_CHANNELS"],
    description: "lock channel",
 
    async execute (client, message, args){
    const channels = message.guild.channels.cache
        
        if (args[0] === 'channel'){
            channels.forEach(channel =>{message.channel.updateOverwrite(message.guild.roles.everyone,{
            SEND_MESSAGES: false})
                
       

        })
    
        
     
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        return message.channel.send('locked all channels');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                })
                
            })
            return message.channel.send('unlocked all channels')
        }
    }
}
