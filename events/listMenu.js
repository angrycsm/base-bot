const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, StringSelectMenuBuilder, StringSelectaMenuOptionBuilder, ActionRowBuilder } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate, async execute(interaction) {

    const embedEps = new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Clique no botão para assistir o Episódio!')
    .setDescription('Eu espero que goste, fiz com muito carinho e é algo muito especial, aproveite!!.')
    
    const link1 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/12GcVBSchSf-px269bjfxNTXH4PdlPGcL/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link2 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/13-Jyuz2cpci4FwCypdlju_DzxWiKoYBE/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link3 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/13jIXugPVmbUUsaagfUHFOrR8WLWt_oKq/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link4 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/13n58MwuHbfrKzCJj1nfV4lS4C2zdAqkb/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link5 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/13tcg6VZJQR6_pVEbNHcY8SSFWppJwA0u/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link6 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/17leFYblDJHkL2re8Rtma21JNPIpE-djB/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link7 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/14C0A1Z2p_VD3UNsxgDLPoAnVEgZn_kCa/view?usp=drivesdk')
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

    const row6 = new ActionRowBuilder()
    .addComponents(link6);
 
    const row7 = new ActionRowBuilder()
    .addComponents(link7);
    
    if(interaction.isStringSelectMenu()){
      const selected = interaction.values[0]
      if(selected == 'Ep1'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row1]})
      } else if (selected == 'Ep2'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row2]})
      } else if (selected == 'Ep3'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row3]})
      } else if (selected == 'Ep4'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row4]})
      } else if (selected == 'Ep5'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row5]})
      } else if (selected == 'Ep6'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row6]})
      } else if (selected == 'Ep7'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row7]})
      }
    };
  }
}