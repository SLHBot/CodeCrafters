const { Sticker, StickerTypes } = require('wa-sticker-formatter')

module.exports.execute = async (client, flag, arg, M) => {
    const content = JSON.stringify(M.quoted)
    const isQuotedSticker = M.type === 'extendedTextMessage' && content.includes('stickerMessage')

    if (isQuotedSticker) {
        const pack = arg.split('|')
        const buffer = await M.quoted.download()
        const sticker = new Sticker(buffer, {
            pack: pack[1] ? pack[1].trim() : '👨🏻‍💻 Handcrafted for you by',
            author: pack[2] ? pack[2].trim() : `GeekHirusha Dev 👨🏻‍💻`,
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            quality: 70
        })

        await client.sendMessage(
            M.from,
            {
                sticker: await sticker.build()
            },
            {
                quoted: M
            }
        )
    } else return M.reply('🟥 *Please quote the sticker!!*')
    // console.log(buffer)
}

module.exports.command = {
    name: 'steal',
    aliases: ['take'],
    category: 'utils',
    usage: '[quote the sticker] |PackName|AuthorName',
    exp: 10,
    description: 'Changes the sticker Pack and Author name'
}
