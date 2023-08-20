module.exports.execute = async (client, flag, arg, M) => {
  const image = await client.utils.getBuffer(
      'https://i.ibb.co/Cb7rrWG/code-crafters-removebg-preview.png'
  )
  const result = await client.utils.fetch('https://sheetdb.io/api/v1/su0m4d89suxm1')
  let caption = ''
    const length = result.length >= 10 ? 10 : result.length
    for (let i = 0; i < length; i++) {
        caption += `*#${i + 1}*\n 📅 Date: *${result[i].Date}*\n ${result[i].Batch} Event: *${result[i].Title}*\n ⏰ Time: *${
            result[i].STime
        } to ${result[i].ETime}*\n 👨‍🏫 Speaker: *අදාල නෑනේ.*\n 📍 Location: *Colombo*  \n 🌐 *Online - Click Here to Join: ${result[i].Link}*\n\n`
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
