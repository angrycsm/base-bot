const { Events, ButtonBuilder, ButtonStyle, EmbedBuilder, StringSelectMenuBuilder, StringSelectaMenuOptionBuilder, ActionRowBuilder } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate, async execute(interaction) {

    const embedEps = new EmbedBuilder()
    .setColor('#B757FF')
    .setTitle('Clique no botão para assistir o Episódio!')
    .setDescription('Eu espero que goste, fiz com muito carinho e é algo muito especial, aproveite!!.')
    .setTimestamp()
    
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

    const link8 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1-9tHCHLpJsAQIGiRprVeWTcyVP4H_-JV/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link9 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1-dFi9jr3W8MFqiT_3osNOa1tZXfRqdPt/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link10 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1-iA9xaE8aVlycgfkPV6VPdtMvfKNJO_H/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link11 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1-j6udsIUiHGTASpqTDYR-8is8hLpEDe4/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link12 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/1063zaHtGJ4a9KJm7EVU09T5IbGhk5_b3/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link13 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/10DtZoU392b9rHCZ-_VjHb58EOvSP745y/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link14 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/10IerrU8h85eegfp9eJXU_nVdW_6OW6uh/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link15 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/10P7w6tFbyaJeK9ZYY-dpR3MOtnxgNbYe/view?usp=drivesdk')
    .setStyle(ButtonStyle.Link)

    const link16 = new ButtonBuilder()
    .setLabel('Assistir')
    .setURL('https://drive.google.com/file/d/10PctJgQPPimSBH6xqI_18xW-0Zenmdb2/view?usp=drivesdk')
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

    const row8 = new ActionRowBuilder()
    .addComponents(link8);

    const row9 = new ActionRowBuilder()
    .addComponents(link9);

    const row10 = new ActionRowBuilder()
    .addComponents(link10);

    const row11 = new ActionRowBuilder()
    .addComponents(link11);

    const row12 = new ActionRowBuilder()
    .addComponents(link12);

    const row13 = new ActionRowBuilder()
    .addComponents(link13);

    const row14 = new ActionRowBuilder()
    .addComponents(link14);

    const row15 = new ActionRowBuilder()
    .addComponents(link15);

    const row16 = new ActionRowBuilder()
    .addComponents(link16);
    
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
      } else if(selected == 'Ep8'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row8]})
      } else if(selected == 'Ep9'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row9]})
      } else if(selected == 'Ep10'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row10]})
      } else if(selected == 'Ep11'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row11]})
      } else if(selected == 'Ep12'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row12]})
      } else if(selected == 'Ep13'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row13]})
      } else if(selected == 'Ep14'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row14]})
      } else if (selected == 'Ep15'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row15]})
      } else if(selected == 'Ep16'){
        await interaction.reply({ embeds: [embedEps], content: '', ephemeral: true, components: [row16]})
      }
    };
  }
}