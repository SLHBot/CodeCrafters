module.exports.execute = async (client, flag, arg, M) => {
    if (!arg) return M.reply('Sorry you did not give term!')
    let out = ''
    try {
        const output = (await eval(arg)) || 'Executed JS Successfully!'
        console.log(output)
        out = JSON.stringify(output)
    } catch (err) {
        out = err.message
    }
    return await M.reply(out)
}

module.exports.command = {
    name: 'eval',
    aliases: ['e'],
    category: 'dev',
    exp: 0,
    usage: '[code]',
    description: 'Evaluates JavaScript'
}
