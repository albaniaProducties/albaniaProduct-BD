#       are-db
![i.jpg](./i.jpg)

**your want bd?**
- [npm i are-db](https://www.npmjs.com/package/are-db) 
#       Функции 
- **add** : добавлена возможность сохранения данных в базе данных

- **get()**: добавлена возможность получения данных из базы данных

- **hasIs()**: добавлена возможность поиска данных в базе данных

- **delete()**: добавлена возможность удаления данных из базы данных.
- **save()**: добавлена возможность самому выбрать когда и что сохранить
- **load()**: Добавлена возможность выгрузить данные из файла
- **updVal()**: Добавлена возможность обновить обновить только значения.
- **updName()**: возможность обновить имя

#        Обновления
- **Код переписан и теперь вместо просто файла идет сначала создания папки, а вторым аргументом файл**
- **пример**
```js
const AreDB = require('are-db');

const db = new AreDB('myDB', 'pipiska.json')
// вы можете дать любое названия ваще пофиг.
```
# пример использования upd()

```js
let myTable = new tb('data', 'myTable.json');
myTable.add('cookie', 2);

console.log(myTable.updateVal('cookie', 3)); // Выведет: true
console.log(myTable.get('cookie')); // Выведет: 3

console.log(myTable.updName('cookie', 'chocolate')); // Выведет: true
console.log(myTable.get('cookie')); // Выведет: null
console.log(myTable.get('chocolate')); // Выведет: 3

db.save();
```
# Пример использования delete()
```js
let myTable = new tb('data', 'myTable.json');
myTable.add('cookie', 2);

console.log(myTable.delete('cookie')); // Выведет: true
console.log(myTable.get('cookie')); // Выведет: null
```

# Пример использования get()
```js
let myTable = new tb('data', 'myTable.json');
myTable.add('cookie', 2);

console.log(myTable.get('cookie')); // Выведет: 2
```
# Пример использования add()
```js
let myTable = new tb('data', 'myTable.json');
myTable.add('cookie', 2);
```

# English:

# UPD 1.0.0

**your want bd?** 
- [npm i are-db](https://www.npmjs.com/package/are-db) 
# Features 
- **add** : added ability to save data to database
- **get()**: added the ability to get data from the database
- **hasIs()**: added the ability to search for data in the database
- **delete()**: added the ability to delete data from the database.
- **save()**: added the ability to choose when and what to save
- **load()**: Added the ability to upload data from a file
- **updVal()**: Added the ability to update update only values. 
- **updName()**: ability to update name

# Example
```js
const myTable = require('tb');
let myTable = new tb('data', 'myTable.json');
// can give any name, it doesn't matter.
```
# Example func

## add()
```js
let myTable = new tb('data', 'myTable.json');
myTable.add('cookie', 2);
```
## delete();
```js
let myTable = new tb('data', 'myTable.json');
myTable.add('cookie', 2);

console.log(myTable.delete('cookie')); // result: true
console.log(myTable.get('cookie')); // result: null
```
## get();
```js
let myTable = new tb('data', 'myTable.json');
myTable.add('cookie', 2);

console.log(myTable.get('cookie')); // result: 2
```
## updName(), updVal()
```js
let myTable = new tb('data', 'myTable.json');
myTable.add('cookie', 2);

console.log(myTable.updVal('cookie', 3)); // result: true
console.log(myTable.get('cookie')); // Выведет: 3

console.log(myTable.updName('cookie', 'chocolate')); 
// result: true
console.log(myTable.get('cookie')); // result: null
console.log(myTable.get('chocolate')); // result: 3
```
- [offical server](https://discord.gg/qhGqG8rR4w)
- [оффицаильный сервер](https://discord.gg/qhGqG8rR4w)
**Мы ценним ваше внимания этой базе данных**
**We appreciate your attention!**