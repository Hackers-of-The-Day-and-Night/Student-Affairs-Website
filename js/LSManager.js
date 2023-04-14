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

  searchByName(value) {
    let res = [];
    let arr = this.getAll();
    for (let i = 0; i < arr.length; ++i) {
      let stud = arr[i];
      if (stud.name.includes(value)) {
        res.push(stud);
      }
    }
    return res;
  }

  getAll() {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      arr.push(this.get(localStorage.key(i)));
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
