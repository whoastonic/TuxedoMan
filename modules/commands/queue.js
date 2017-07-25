const db = require('../database.js')
const Command = require('./command.js')
const Response = require('../response.js')

module.exports = new Command(
  'queue',
  'Displays the queue',
  [],
  'Anyone',
  false,
  function (msg) {
    let client = db.getGuildInfo(msg.guild.id)
    let str = ''
    if (client.queue.length === 0) {
      str = 'the queue is empty.'
    } else {
      for (let i = 0; i < client.queue.length; i++) {
        // 17 because the "and more" string is 17 characters long
        // the remaining videos in queue can never be more than max queue
        // so compare against max queue to be safe
        if (str.length + 17 + client.queue.length.toString().length +
        client.queue[i].title.length + client.queue[i].user.username.length < 2000) {
          str += `"${client.queue[i].title}" (requested by ${client.queue[i].user.username}) `
        } else {
          str += `\n**...and ${(client.queue.length - i - 1)} more.**`
          break
        }
      }
    }
    return new Response(msg, str)
  }
)
