export const handleStatus = res => res.ok
  ? res.json()
  : Promise.reject(res.statusText)

export const log = param => {
  console.log(param)
  return param
}

export const timeoutPromise = (milliseconds, promise) => {
  const timeout = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Limite de ${milliseconds}ms excedido.`), milliseconds))

  return Promise.race([timeout, promise])
}

export const delay = milliseconds => data =>
  new Promise(resolve =>
    setTimeout(() => resolve(data), milliseconds))

export const retry = (retries, milliseconds, fn) =>
  fn().catch(error =>
    delay(milliseconds)().then(() =>
      retries > 1
        ? retry(--retries, milliseconds, fn)
        : Promise.reject(error))
  )
