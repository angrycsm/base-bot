const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {

    if(interaction.isStringSelectMenu()){
      const selected = interaction.values[0]
      if(selected == 'Desgraça ao seu Dispor'){
        await interaction.reply('Eps de Desgraça ao seu dispor: https://drive.google.com/drive/folders/120nry2e5AkPuQf5qdwRtjZrb-EL4scgx')
      }
    }
  },
};