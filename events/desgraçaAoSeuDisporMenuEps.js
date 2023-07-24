const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {

  const embedLink= new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Episódios de Desgraça ao seu Dispor')
    .setDescription('`Temporada Completa✅️`')
    .addFields(
      {name: 'Sinopse:', value: 'Uma mulher com pouco tempo de vida e um homem com o superpoder de destruir o mundo descobrem o significado do amor.', inline: true},
    )
    .setImage('https://i.imgur.com/ZspwIxs.jpg')
    .setTimestamp()
    
  const list = new StringSelectMenuBuilder()
    .setCustomId('Dorama lista de Episódios')
    .setPlaceholder('Selecione seu episódio ')
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 1')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep1'),
          
      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 2')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep2'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 3')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep3'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 4')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep4'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 5')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep5'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 6')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep6'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 7')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep7'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 8')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep8'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 9')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep9'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 10')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep10'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 11')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep11'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 12')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep12'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 13')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep13'),
    
      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 14')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep14'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 15')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep15'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 16')
      .setDescription('Episódio: Dublado | Qualidade: HD | by biel')
      .setValue('Ep16')

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