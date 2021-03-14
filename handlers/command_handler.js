const { readdirSync } = require("fs");

module.exports = (bot) => {
    readdirSync("./plugins/").map(dir => {
        const commands = readdirSync(`./plugins/${dir}/`).map(cmd=>{
            
            let pull = require(`../plugins/${dir}/${cmd}`)
            console.log(`Loaded command ${pull.name}`)
            bot.commands.set(pull.name,pull)

            if(pull.aliases){
                pull.aliases.map(p=>bot.aliases.set(p,pull))
            }
        })
    })
}