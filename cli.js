const commands = require("./commands");

const command = process.argv[2];

if (!command || !commands[command]) {
  commands.help(commands);
  return process.exit(0);
}

commands[command](commands, ...process.argv.slice(3));
