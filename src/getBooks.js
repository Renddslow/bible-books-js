const sortOn = require('sort-on');

const nt = require('../data/new-testament');
const ot = require('../data/old-testament');

const SECTIONS = [
  'NT',
  'OT',
];

const ORDER_BY = [
  'hebrew',
  'alpha',
];

const handleOrder = ({ot = [], nt = []}, orderBy) => {
  if (!orderBy) {
    return ([...ot, ...nt]).filter((b) => b);
  }

  if (orderBy === 'hebrew') {
    return ([
      ...sortOn(ot, ['order.hebrew.global', 'id']),
      ...nt,
    ]).filter((b) => b);
  } else {
    return sortOn([...ot, ...nt], 'titles.english').filter((b) => b);
  }
};

module.exports = (from, orderBy) => {
  const books = {};

  if (from !== '*' && !SECTIONS.includes(from)) {
    // TODO: Put real error in
    throw new Error('Not a valid section');
  }

  if (orderBy && !ORDER_BY.includes(orderBy)) {
    // TODO: Put real error in
    throw new Error('Not a valid order by');
  }

  const otBooks = Object.keys(ot).map((key) => Object.assign({}, ot[key], { id: key }));
  const ntBooks = Object.keys(nt).map((key) => Object.assign({}, nt[key], { id: key }));

  if (from === 'OT') {
    books.ot = otBooks;
  } else if (from === 'NT') {
    books.nt = ntBooks;
  } else {
    books.ot = otBooks;
    books.nt = ntBooks;
  }

  return handleOrder(books, orderBy);
};

module.exports.OT = 'OT';
module.exports.NT = 'NT';
module.exports.HEBREW = 'hebrew';
module.exports.ALPHA = 'alpha';
