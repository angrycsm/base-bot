const { Events, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate, 
  async execute(interaction) {

    const embedOmbro = new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Episódios de Ombro Amigo🫂')
    .setDescription('`Episódios em andamento..⚙️`')
    .addFields(
      {name: 'Sinopse:', value: 'Em Ombro Amigo, a formatura de Si Tu Mo está próxima e ela não tem certeza de seus planos futuros. Após conhecer o gênio, estudante de física, Gu Wei Yi e os dois acidentalmente acabarem morando juntos, suas vidas mudam para sempre, com a grande atração crescente entre os dois.', inline: true},
    )
    .setImage('https://drive.google.com/file/d/1-v2I1AsLG1xaeqFZoCktz2JmXWLXa_MX/view?usp=drivesdk')
    .setTimestamp()

    const list = new StringSelectMenuBuilder()
    .setCustomId('Ombro Amigo!')
    .setPlaceholder('Selecione seu episódio')
    .addOptions(
      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 1')
      .setDescription('Episódio: Legendado | Qualidade: HD | by biel')
      .setValue('Ep1o'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 2')
      .setDescription('Episódio: Legendado | Qualidade: HD | by biel')
      .setValue('Ep2o'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 3')
      .setDescription('Episódio: Legendado | Qualidade: HD | by biel')
      .setValue('Ep3o'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 4')
      .setDescription('Episódio: Legendado | Qualidade: HD | by biel')
      .setValue('Ep4o'),

      new StringSelectMenuOptionBuilder()
      .setLabel('Episódio 5')
      .setDescription('Episódio: Legendado | Qualidade: HD | by biel')
      .setValue('Ep5o')
    )


    const row = new ActionRowBuilder()
    .addComponents(list)
    if(interaction.isStringSelectMenu()){
      const selected = interaction.values[0]
      if(selected == 'Ombro Amigo'){
        await interaction.reply({ embeds: [embedOmbro], components: [row],  ephemeral: true})
      }
    }
  }
}