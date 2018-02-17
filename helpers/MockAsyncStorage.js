export default class MockAsyncStorage {
  constructor(cache = {}) {
    this.storage = cache
  }

  setItem(key, value) {
    return Promise.resolve(this.storage[key] = value)
  }

  getItem(key, value) {
    return Promise.resolve(this.storage[key])
  }

  multiGet(keys) {
    return Promise.resolve(
      Object.keys(this.storage)
        .filter(key => keys.includes(key))
        .map(key => [key, this.storage[key]])
    )
  }

  multiSet(mapping) {
    return Promise.resolve(
      mapping
        .map(([key, data]) => this.storage[key] = data)
    )
  }

  clear() {
    this.storage = {}
  }
}
