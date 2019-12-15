const events = new Map()

export const EventEmitter = {
  on(event, listener) {
    if (!events.has(event)) events.set(event, [])
    events.get(event).push(listener)
  },

  emit(event, data) {
    const listener = events.get(event)
    if (listener)
      listener.forEach(listener => listener(data))
  }
}
