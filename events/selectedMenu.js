const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {

  const embedLink = new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Episódios de Desgraça ao seu Dispor')

  const list = new StringSelectMenuBuilder()
    .setCustomId('Dorama lista de Episódios')
    .setPlaceholder('Selecione seu episódio ')
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 1:')
      .setDescription('Sinopse:')
      .setValue('Ep1'),
          
      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 2:')
      .setDescription('Sinopse:')
      .setValue('Ep2'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 3:')
      .setDescription('Sinopse:')
      .setValue('Ep3'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 4:')
      .setDescription('Sinopse:')
      .setValue('Ep4'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 5:')
      .setDescription('Sinopse:')
      .setValue('Ep5'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 6:')
      .setDescription('Sinopse:')
      .setValue('Ep6'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 7:')
      .setDescription('Sinopse:')
      .setValue('Ep7')
    )


  const row1 = new ActionRowBuilder()
    .addComponents(list);
    
    if(interaction.isStringSelectMenu()){
      const selected = interaction.values[0]
      if(selected == 'Desgraça ao seu Dispor'){
        await interaction.reply({ content: '', ephemeral: true, embeds: [embedLink], components: [row1] });
      }
    }
  },
};