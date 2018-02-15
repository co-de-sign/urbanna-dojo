export default class MockAsyncStorage {
  constructor(cache = {}) {
    this.storage = cache
  }

  setItem(key, value) {
    return new Promise(resolve => resolve(this.storage[key] = value))
  }

  getItem(key, value) {
    return new Promise(resolve => resolve(this.storage[key]));
  }

  clear() {
    this.storage = {}
  }
}
