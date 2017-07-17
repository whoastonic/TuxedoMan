const db = require('../database.js')
const Response = require('../response.js')

module.exports = {
  command: 'np',
  description: 'Displays the current song',
  parameters: [],
  rank: 0,
  execute: function (msg) {
    let client = db.getGuildInfo(msg.guild.id)
    let str = 'Now playing: '

    if (client.isPlaying) {
      str += `"${client.nowPlaying.title}" (requested by ${client.nowPlaying.user.username})`
    } else {
      str += 'nothing!'
    }
    return new Response(msg, str)
  }
}
