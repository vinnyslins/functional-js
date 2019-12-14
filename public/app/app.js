import { log, retry, timeoutPromise } from './utils/promise-helpers.js'
import './utils/array-helpers.js'
import { notasService as service } from './nota/service.js'
import { debounceTime, partialize, pipe, takeUntil } from './utils/operators.js'

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500)
)

const action = operations(() =>
  retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
    .then(console.log)
    .catch(console.error)
)

document
  .querySelector('#myButton')
  .onclick = action
