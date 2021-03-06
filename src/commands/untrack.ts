import { CommandResults } from 'eris-boiler'

import { GuildCommand } from '@tuxedoman'
import { vip as permission } from '@tuxedoman/permissions'

export default new GuildCommand({
  name: 'untrack',
  description: 'Untrack a game',
  options: {
    parameters: [ 'game name as appears on discord statuses' ],
    permission
  },
  run: (bot, { msg, params }): CommandResults => {
    return bot.gm.untrackGame(bot, msg.channel.guild, params.join(' '))
  }
})
