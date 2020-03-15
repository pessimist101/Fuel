const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity(`Gimme fuel, gimme fire!`);
});

client.on("message", message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "miles") {
  console.log("received miles");
  const milesAmount = args;
  const longCost = milesAmount / 45 * 4.54609 * 1.23 * 100;
  console.log("calculating longCost!");
  const cost = Math.round(longCost) / 100;
  console.log("rounding the number");
  message.channel.send("£" + cost);
  console.log("sending the message");
  return;
}
});
client.login(config.token);
