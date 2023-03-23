const fs = require('fs');
const path = require('path');


class tb {
  constructor(directoryName, fileName, logger) {
    this.directoryName = directoryName;
    this.fileName = fileName;
    this.filePath = path.resolve(path.dirname(module.filename), directoryName, fileName);

    this.data = [];
    this.load();
  }

  add(name, value) {
    this.data.push({ [name]: value });
    this.save();
  }

  get(name) {
    let result = null;
    this.data.forEach((item) => {
      if (Object.keys(item).includes(name)) {
        result = item[name];
      }
    });
    return result;
  }

  save() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.data));
    } catch (err) {
      if (err.code === 'ENOENT') {
        fs.mkdirSync(path.resolve(path.dirname(module.filename), this.directoryName), { recursive: true });
        fs.writeFileSync(this.filePath, JSON.stringify(this.data));
      } else {
        throw err;
      }
    }
  }

  load() {
    try {
      if (fs.existsSync(this.filePath)) {
        const rawData = fs.readFileSync(this.filePath);
        this.data = JSON.parse(rawData);
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        fs.mkdirSync(path.resolve(path.dirname(module.filename), this.directoryName), { recursive: true });
        fs.writeFileSync(this.filePath, JSON.stringify(this.data));
      } else {
        throw err;
      }
    }
  }

  delete(name) {
    let index = -1;
    this.data.forEach((item, i) => {
      if (Object.keys(item).includes(name)) {
        index = i;
      }
    });
    if (index >= 0) {
      this.data.splice(index, 1);
      this.save();
      return true;
    }
    return false;
  }

  updVal(name, value) {
    let index = -1;
    this.data.forEach((item, i) => {
      if (Object.keys(item).includes(name)) {
        index = i;
      }
    });
    if (index >= 0) {
      let newItem = { [name]: value };
      this.data[index] = newItem;
      this.save();
      return true;
    }
    return false;
  }

  updName(oldName, newName) {
    let index = -1;
    this.data.forEach((item, i) => {
      if (Object.keys(item).includes(oldName)) {
        index = i;
      }
    });
    if (index >= 0) {
      let value = this.data[index][oldName];
      delete this.data[index][oldName];
      this.data[index][newName] = value;
      this.save();
      return true;
    }
    return false;
  }

  hasIs(name) {
    let found = false;
    this.data.forEach((item) => {
      if (Object.keys(item).includes(name)) {
        found = true;
      }
    });
    return found;
  }
}

module.exports = tb;