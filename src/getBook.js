const { get } = require('dot-prop');

const ot = require('../data/old-testament');
const nt = require('../data/new-testament');

const books = Object.assign({}, ot, nt);

module.exports = (search) => {
  if (books[search]) {
    return books[search];
  } else {
    const key = Object.keys(books).find((k) => (
      get(books[k], 'titles.english') === search ||
      get(books[k], 'titles.hebrew.transliteration') === search ||
      get(books[k], 'titles.hebrew.meaning') === search
    ));
    return books[key];
  }
};