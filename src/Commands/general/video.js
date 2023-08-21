module.exports.execute = async (client, flag, arg, M) => {
  const video = await client.utils.getBuffer(
      arg
  )
  let caption = `From ${M.pushName}`

  await client.sendMessage(M.from, { video, caption})
}

module.exports.command = {
  name: 'video*',
  aliases: ['script'],
  category: 'general',
  usage: '[term | link]',
  exp: 100,
  description: 'See all lectures in this month'
}
