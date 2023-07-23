const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('menuds')
		.setDescription('Exibe um menu com diversas séries, doramas e filmes legais!.'),
	async execute(interaction) {
    const select = new StringSelectMenuBuilder()
    .setCustomId('Dorama')
    .setPlaceholder('✨️Selecione a Série✨️')
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel('💻: Desgraça ao seu Dispor ➡️')
      .setDescription('Selecione para ver os episódios disponíveis.')
      .setValue('Desgraça ao seu Dispor')
    );

    const embed = new EmbedBuilder()
      .setColor('#B757FF')
      .setTitle('Lista de Doramas💜')
      .setDescription('Aqui está listado as doramas que estão disponíveis para assistir, obrigado pela preferência.')
    
    
    const row = new ActionRowBuilder()
    .addComponents(select);

    await interaction.reply({
      content: '', components: [row], embeds: [embed], ephemeral: true,
    });
  },
};