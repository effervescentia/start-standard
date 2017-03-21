/* eslint-disable no-magic-numbers, no-confusing-arrow, import/prefer-default-export */
import chalk from 'chalk';
import table from 'text-table';

const pluralize = (word, count) => (count === 1 ? word : `${word}s`);
const joinMessages = (match, p1, p2) => chalk.dim(`${p1}:${p2}`);

export const format = (results) => {
  let output = '\n';
  let total = 0;

  results.forEach((result) => {
    const messages = result.messages;

    if (messages.length === 0) {
      return;
    }

    total += messages.length;
    output += `${chalk.underline(result.filePath)}\n`;

    output += `${table(messages
        .map((message) => [
          '',
          message.line || 0,
          message.column || 0,
          chalk.red('error'),
          message.message.replace(/\.$/, ''),
          chalk.dim(message.ruleId || '')
        ]), {
          align: ['', 'r', 'l'],
          stringLength: (str) => chalk.stripColor(str).length
        })
      .split('\n')
      .map((el) => el.replace(/(\d+)\s+(\d+)/, joinMessages))
      .join('\n')}\n\n`;
  });

  if (total > 0) {
    output += chalk.red.bold([
      '\u2716 ', total, pluralize(' problem', total), '\n'
    ].join(''));
  }

  return total > 0 ? output : '';
};
