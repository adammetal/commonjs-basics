const cats = require('../models/cats');

const getCats = async (req, res) => {
  res.json(await cats.getCats());
};

const addCat = async (req, res) => {
  const cat = req.body; ///????
  await cats.addCat(cat);
  res.status(201).end("Created");  
}

module.exports = {
  getCats,
  addCat
}
