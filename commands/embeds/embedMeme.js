const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor("Red")
	.setTitle('Regras para enviar MEMES')
	.setDescription('Para deixar este canal mais organizado iremos estabeleder algumas regras de postagens, para que podemos moderar de forma adequada e segura.')
.setThumbnail('https://i.imgur.com/IkOKzbJ.png')
	.addFields(
		{ name: '☄️1° Regra', value: 'Evite enviar vídeos ou imagens relacionadas à Racismo.', inline: true },
		{ name: '2° Regra', value: 'Evite enviar conteúdos de Gore.', inline: true },
    { name: '3° Regra', value: 'Evite o envio de Nsfw.', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: 'ATENÇÃO⚠️', value: 'Todas as regras você pode encontrar neste canal <#1121112165575823481>'}
	)


module.exports = {
	data: new SlashCommandBuilder()
		.setName('embedmeme')
		.setDescription('Cria uma embed de regras do que enviar no canal de memes do Athenas.'),
	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};