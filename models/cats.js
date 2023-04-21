const fs = require('node:fs/promises');

const getCats = async () => {
  const content = await fs.readFile('./cats.txt', { encoding: 'utf-8' });
  const cats = content.split('\n');
  return cats;
}

const addCat = async (cat) => {
  await fs.appendFile('./cats.txt', `${cat}\n`);
}

/*
Setting up the return value of a require
*/
module.exports = {
  getCats,
  addCat
}
