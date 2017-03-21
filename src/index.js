import { format } from './formatter'
const STYLES = ['standard', 'semistandard', 'happiness']

export default (style = 'standard', options = {}) => (input) => {
  return function standard(log) {
    if (!(STYLES.includes(style) || style.includes('standard'))) {
      return Promise.reject()
    }
    const styleChecker = require(style)

    return new Promise((resolve, reject) => {
      styleChecker.lintFiles(input, options, (err, report) => {
        if (err || report.errorCount > 0 || report.warningCount > 0) {
          process.stdout.write(format(report.results))
        }

        if (report.errorCount > 0 || report.warningCount > 0) {
          return reject()
        }

        if (report.errorCount === 0 && report.warningCount === 0) {
          log('¯\\_(ツ)_/¯')
        }

        resolve(input)
      })
    })
  }
}
