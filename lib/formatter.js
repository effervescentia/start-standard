import chalk from 'chalk'
import table from 'text-table'

function pluralize (word, count) {
  return (count === 1 ? word : word + 's')
}

export function format (results) {
  var output = '\n'
  var total = 0

  results.forEach(function (result) {
    var messages = result.messages

    if (messages.length === 0) {
      return
    }

    total += messages.length
    output += chalk.underline(result.filePath) + '\n'

    output += table(
        messages.map(function (message) {
          var messageType

          messageType = chalk.red('error')

          return [
            '',
            message.line || 0,
            message.column || 0,
            messageType,
            message.message.replace(/\.$/, ''),
            chalk.dim(message.ruleId || '')
          ]
        }),
      {
        align: ['', 'r', 'l'],
        stringLength: function (str) {
          return chalk.stripColor(str).length
        }
      }
      ).split('\n').map(function (el) {
        return el.replace(/(\d+)\s+(\d+)/, function (m, p1, p2) {
          return chalk.dim(p1 + ':' + p2)
        })
      }).join('\n') + '\n\n'
  })

  if (total > 0) {
    output += chalk.red.bold([
      '\u2716 ', total, pluralize(' problem', total), '\n'
    ].join(''))
  }

  return total > 0 ? output : ''
}
