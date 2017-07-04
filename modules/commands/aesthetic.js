module.exports = {
  command: 'aesthetic',
  description: 'make your text *a e s t h e t i c*',
  parameters: [],
  rank: 2,
  execute: function (msg, params) {
    let fullParam = params.join(' ')
    let str = ''
    for (var i = 0; i < fullParam.length; i++) {
      let result = ''
      let charCode = fullParam[i].charCodeAt()
      if (charCode < 127 && charCode !== 32) {
        result += String.fromCharCode((charCode + 65248))
      } else {
        result += fullParam[i]
      }
      str += result
      if (i !== params.length - 1) {
        str += ' '
      }
    }
    return {promise: msg.channel.sendMessage(str), content: str, delay: 30000}
  }
}