module.exports = {
    name: 'clear',
    permissions:["MANAGE_CHANNELS"],
    description: "Clear messages!",
  
    //!clear (optional member) (optional amount)
    async execute (client, message, args){
  
      if (!args[0]) return message.reply("Please enter the amount of messages to clear!");
  
      if(isNaN(args[0])) return message.reply("Embed");
  
      if(args[0] > 100) return message.reply("You can't remove more than 100 messages!");
      
      if(args[0] < 1) return message.reply("You have to delete at least one message!");
  
      await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages)
          .then (deleted => message.channel.send(`I have deleted \`${deleted.size} messages!\` `)).then(message => message.delete({timeout: 5500}))
      });
    }
  }  