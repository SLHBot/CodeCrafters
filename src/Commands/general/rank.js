const { getStats } = require('../../Library/stats')
const cx = require('canvacord')

module.exports.execute = async (client, flag, arg, M) => {
    const user = M.quoted?.participant ? M.quoted.participant : M.mentions[0] ? M.mentions[0] : M.sender

    let pfp
    try {
        pfp = await client.profilePictureUrl(user, 'image')
    } catch {
        pfp =
            'https://w0.peakpx.com/wallpaper/346/996/HD-wallpaper-love-live-sunshine-404-error-love-live-sunshine-anime-girl-anime.jpg'
    }

    const level = (await client.DB.get(`${user}_LEVEL`)) || 1
    const { requiredXpToLevelUp, rank } = getStats(level)
    const username = (await client.contact.getContact(user, client)).username
    const experience = (await client.exp.get(user)) || 0

    const card = await new cx.Rank()
        .setAvatar(pfp)
        .setLevel(level, 'LEVEL', true)
        .setCurrentXP(experience, '#db190b')
        .setRequiredXP(requiredXpToLevelUp, '#db190b')
        .setProgressBar('#db190b')
        .setDiscriminator(user.substring(3, 7), '#db190b')
        .setCustomStatusColor('#db190b')
        .setLevelColor('#db190b', '#db190b')
        .setOverlay('', '', false)
        .setUsername(username, '#db190b')
        .setBackground('COLOR', '#000000')
        .setRank(1, '', false)
        .renderEmojis(true)
        .build({ fontX: 'arial', fontY: 'arial' })

    //user.substring(3, 7)
    client.sendMessage(
        M.from,
        {
            image: card,
            caption: `
🏷️ *Username: ${username}*

🪄 *Experience: ${experience}*

🏆 *Level: ${level}*

🎡 *Rank: ${rank}*
            
🍥 *RequiredXpToLevelUp: ${requiredXpToLevelUp} exp required*`
        },
        {
            quoted: M
        }
    )
}

module.exports.command = {
    name: 'rank',
    aliases: ['rk'],
    category: 'general',
    usage: '',
    exp: 5,
    description: 'Gives you your rank'
}
