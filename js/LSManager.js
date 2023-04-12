class LSManager {

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  search(key) {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes(key)) {
        arr.push(localStorage.key(i));
      }
    }
    return arr;
  }

  view() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      arr.push(localStorage.key(i));
    }
    return arr;
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

}
