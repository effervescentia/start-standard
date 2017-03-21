import test from 'tape'

import task from '../src'

test('basic', (t) => {
  t.equal(
    typeof task,
    'function',
    '1st function'
  )

  t.equal(
    typeof task(),
    'function',
    '2nd function'
  )

  t.equal(
    typeof task()(),
    'function',
    '3rd function'
  )

  t.end()
})
