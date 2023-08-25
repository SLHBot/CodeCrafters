module.exports.execute = async (client, flag, arg, M) => {
  const image = await client.utils.getBuffer(
    'https://i.ibb.co/Cb7rrWG/code-crafters-removebg-preview.png'
  )
  
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60000;

  const utc = localTime + localOffset;
  const offset = 5.495; // UTC of srilanka is +05.30
  const srlk = utc + (3600000 * offset);

  const srilankaTimeNow = new Date(srlk).toLocaleString("si-LK");
  // Output: 2023-8-25, 12.40.35

  const result = await client.utils.fetch('https://sheetdb.io/api/v1/su0m4d89suxm1')
  let caption = `*${M.pushName}* ඔයාට පල්ලෙහා තියෙන *link* එකෙන් ගිහිං බලන්නත් පුළුවන්.\n *http://codecrafters.eu5.org/Meetings/* \n\nToday :- *${srilankaTimeNow}*\n\n`
  const length = result.length >= 10 ? 10 : result.length
  for (let i = 0; i < length; i++) {
    if (result[i].Link == "") {
      Type = "Pending";
    }
    else {
      Type = result[i].Link;
    }
    if (result[i].Title.includes("DBMS")) {
      Lecture = "Mr Eshan Oshadha";
    }
    else if (result[i].Title.includes("WP")) {
      Lecture = "Mr Eshan Oshadha";
    }
    else if (result[i].Title.includes("OOPC")) {
      Lecture = "Dr Bhatiya Tissera";
    }
    else if (result[i].Title.includes("Bioinformatics")) {
      Lecture = "Dr Ranga Jayakodi";
    }
    else if (result[i].Title.includes("Academic writing")) {
      Lecture = "Dr Kalharie Pitigala";
    }
    else if (result[i].Title.includes("Role of AI in the Aviation Industry")) {
      Lecture = "Prof Thusitha Rodrigo";
    }
    else if (result[i].Title.includes("OOSAD")) {
      Lecture = "Miss VISHMI EMBULDENIYA";
    }
    else if (result[i].Title.includes("INSE")) {
      Lecture = "prof W.Erantha de mel";
    }
    else if (result[i].Title.includes("Adoption of Digital Technologies in the Food and Agriculture sectors")) {
      Lecture = "Dr Lanka Undugoda";
    }
    else if (result[i].Title.includes("IOT")) {
      Lecture = "Mr Tharaka Sankalpa";
    }
    else if (result[i].Title.includes("Crafters")) {
      Lecture = "Hirusha Dayarathna";
    }
    else {
      Lecture = "අදාල නෑනේ.";
    }
    caption += `*#${i + 1}*\n 📅 Date: *${result[i].Date}*\n ${result[i].Batch} Event: *${result[i].Title}*\n ⏰ Time: *${result[i].STime
      } to ${result[i].ETime}*\n 👨‍🏫 Speaker: *${Lecture}*\n 📍 Location: *Colombo*  \n 🌐 Online - *Click Here to Join:  ${Type}*\n\n`
  }
  await client.sendMessage(M.from, { image, caption }, { quoted: M })
}

module.exports.command = {
  name: 'meetings*',
  aliases: ['script'],
  category: 'general',
  usage: '',
  exp: 100,
  description: 'See all lectures in this month'
}
