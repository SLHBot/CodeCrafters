const { Sticker } = require('wa-sticker-formatter')

module.exports.execute = async (client, flag, arg, M) => {
    if (!M.messageTypes(M.type) && !M.messageTypes(M.quoted.mtype))
        return void M.reply('🟥 *Caption/Quote an image/video/gif message*')

    const pack = arg.split('|')
    const buffer = M.quoted ? await M.quoted.download() : await M.download()
    const sticker = await new Sticker(buffer, {
        pack: pack[1] ? pack[1].trim() : '👨🏻‍💻 Handcrafted for you by',
        author: pack[2] ? pack[2].trim() : `GeekHirusha Dev 👨🏻‍💻`,
        categories: ['🤩', '🎉'],
        quality: 70,
        type:
            flag.includes('--c') || flag.includes('--crop')
                ? 'crop'
                : flag.includes('--s') || flag.includes('--stretch')
                ? 'default'
                : flag.includes('--circle')
                ? 'circle'
                : 'full'
    }).build()
    await client.sendMessage(M.from, { sticker }, { quoted: M })
}

module.exports.command = {
    name: 'loveu*',
    aliases: ['s'],
    category: 'utils',
    usage: '[quote the video or image] |PackName|AuthorName',
    exp: 15,
    description: 'Converts a normal video or an image into sticker'
}
