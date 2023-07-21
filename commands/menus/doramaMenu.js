const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('menuds')
		.setDescription('Exibe um menu com diversas séries, doramas e filmes legais!.'),
	async execute(interaction) {
    const select = new StringSelectMenuBuilder()
    .setCustomId('Dorama')
    .setPlaceholder('Selecione algo que goste.')
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel('Desgraça ao seu Dispor')
      .setDescription('Aperte para ir assistir')
      .setValue('Desgraça ao seu Dispor')
    );

    const row = new ActionRowBuilder()
    .addComponents(select);

    await interaction.reply({
      content: 'Escolha!', components: [row],
    });
  },
};