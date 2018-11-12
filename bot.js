const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!fuckme') {
    	message.reply('No thank you.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);



public class Help : ModuleBase<SocketCommandContext>
{
    [Command("test")]
    public async Task TestAsync()
    {
        await Context.Client.SetGameAsync("Tit Smacker");

        await Task.CompletedTask;
