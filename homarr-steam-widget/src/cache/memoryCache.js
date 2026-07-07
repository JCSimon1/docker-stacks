class MemoryCache {
  #cache = new Map();

  get(key) {
    const item = this.#cache.get(key);

    if (!item) {
      return null;
    }

    if (item.expires < Date.now()) {
      this.#cache.delete(key);
      return null;
    }

    return item.value;
  }

  set(key, value, ttl) {
    this.#cache.set(key, {
      value,
      expires: Date.now() + ttl * 1000,
    });
  }

  clear() {
    this.#cache.clear();
  }

  delete(key) {
    this.#cache.delete(key);
  }
}

export default new MemoryCache();