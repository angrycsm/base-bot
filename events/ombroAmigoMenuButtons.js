const { Events, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate, 
  async execute(interaction) {

    const embed1 = new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Episódio 1 de Ombro Amigo🫂')
    .setDescription('Eu espero que goste, fiz com muito carinho e é algo muito especial, aproveite!!.')
      .addFields(
        { name: 'Clique no botão para assistir o Episódio!', value: '🫂 | Dorama Bot', inline: true }
      )
    .setTimestamp()

    const embed2 = new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Episódio 2 de Ombro Amigo🫂')
    .setDescription('Eu espero que goste, fiz com muito carinho e é algo muito especial, aproveite!!.')
      .addFields(
        { name: 'Clique no botão para assistir o Episódio!', value: '🫂 | Dorama Bot', inline: true }
      )
    .setTimestamp()

    const embed3 = new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Episódio 3 de Ombro Amigo🫂')
    .setDescription('Eu espero que goste, fiz com muito carinho e é algo muito especial, aproveite!!.')
      .addFields(
        { name: 'Clique no botão para assistir o Episódio!', value: '🫂 | Dorama Bot', inline: true }
      )
    .setTimestamp()

    const embed4 = new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Episódio 4 de Ombro Amigo🫂')
    .setDescription('Eu espero que goste, fiz com muito carinho e é algo muito especial, aproveite!!.')
      .addFields(
        { name: 'Clique no botão para assistir o Episódio!', value: '🫂 | Dorama Bot', inline: true }
      )
    .setTimestamp()

    const embed5 = new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Episódio 5 de Ombro Amigo🫂')
    .setDescription('Eu espero que goste, fiz com muito carinho e é algo muito especial, aproveite!!.')
      .addFields(
        { name: 'Clique no botão para assistir o Episódio!', value: '🫂 | Dorama Bot', inline: true }
      )
    .setTimestamp()

    const link1 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1dmbwxM-ONWceoU0CDXuDCfzifubD7t0O/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link2 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1mkMflafr2w9VoWFeVksWub7AcZAOjPtM/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link3 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1InhQqy6G9yjNv30aTSSyP9Nx20r1R7YV/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link4 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1WdIvzd8FsVi9po6zI3R9Xh1ldIRbYVbk/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)
    const link5 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1YK-OzJknlf2CytcWVRivOsp8hNZRAtGH/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)
    
    const row1 = new ActionRowBuilder()
    .addComponents(link1);

    const row2 = new ActionRowBuilder()
    .addComponents(link2);

    const row3 = new ActionRowBuilder()
    .addComponents(link3);

    const row4 = new ActionRowBuilder()
    .addComponents(link4);

    const row5 = new ActionRowBuilder()
    .addComponents(link5);

    if(interaction.isStringSelectMenu()){
      const selected = interaction.values[0]
      if(selected == 'Ep1o'){
        await interaction.reply({ embeds: [embed1], ephemeral: true, components: [row1], content: ''})
      } else if(selected == 'Ep2o'){
        await interaction.reply({ embeds: [embed2], ephemeral: true, components: [row2], content: ''})
      } else if(selected == 'Ep3o'){
        await interaction.reply({ embeds: [embed3], ephemeral: true, components: [row3], content: ''})
      } else if(selected == 'Ep4o'){
        await interaction.reply({ embeds: [embed4], ephemeral: true, components: [row4], content: ''})
      } else if(selected == 'Ep5o'){
        await interaction.reply({ embeds: [embed5], ephemeral: true, components: [row5], content: ''})
      }
    }
  }
}