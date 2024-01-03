module.exports.execute = async (client, flag, arg, M) => {
  const audio = await client.utils.getBuffer(
      arg
  )
  let caption = `From ${M.pushName}`

  await client.sendMessage(M.from, { audio})
}

module.exports.command = {
  name: 'audio*',
  aliases: ['script'],
  category: 'general',
  usage: '[term | link]',
  exp: 100,
  description: 'See all lectures in this month'
}