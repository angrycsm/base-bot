// Requer as classes discord.js necessárias
const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Criar uma nova instância para o client
const client = new Client ({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

// Quando o cliente estiver pronto, execute este código (apenas uma vez)
client.once(Events.ClientReady, c => {
  console.log(`Conectado em ${c.user.tag}`);
});

// Logar no discord pelo token
client.login(token);
