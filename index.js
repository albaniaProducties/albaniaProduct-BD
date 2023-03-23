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

  add(data) {
    this.data.push(data);
    this.save();
  }

  getAll() {
    return this.data;
  }

  save() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.data));
    } catch (err) {
      if (err.code === 'ENOENT') {
        // создаем папку и файл, если их нет
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
        // создаем папку и файл, если их нет
        fs.mkdirSync(path.resolve(path.dirname(module.filename), this.directoryName), { recursive: true });
        fs.writeFileSync(this.filePath, JSON.stringify(this.data));
      } else {
        throw err;
      }
    }
  }

  remove(index) {
    this.data.splice(index);
    this.save();
  }

  update(index, newData) {
    this.data[index] = newData;
    this.save();
  }

  has(data) {
    return Object.values(this.data).includes(data);
  }
}

module.exports = tb;