const music = require('../music.js')
const Command = require('./command.js')

module.exports = new Command(
  'search',
  'Searches for a video or playlist on YouTube and adds it to the queue',
  ['query'],
  'Anyone in Voice',
  false,
  function (msg, params) {
    let fullParam = params.join(' ')
    return music.searchVideo(msg, fullParam)
  }
)
