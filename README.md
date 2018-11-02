# Bible Books • [![npm version](https://badge.fury.io/js/bible-books.svg)](https://badge.fury.io/js/bible-books)

Access the books of the Bible in the traditional Hebrew and Protestant canon with a few handy methods.

## Getting Started

```
yarn install bible-books
```

## API

### get(input)
Return an individual book of the Bible based on a search input.

#### input
Type: `string`

The string can be the 3 character ID of the book, or the full title of the book from any canon.

### getAll(section, orderBy)
Return a list of books from a certain set of books and order them.

#### section
Type: `string` - `OT | NT | *`

#### orderBy
Type: `string` - `hebrew | alpha`

Order a list of books by a given canon order or alphabetically. Defaults to Protestant canon. 

If ordered according to the Hebrew canon, the OT will be returned first with the Hebrew canon, and the NT (if requested) will be returned after it in traditional protestant order.
Alphabetically does not respect the section.  

## Structure

All of the data can be found as two JSON objects in the `data` directory as `new-testament.json` or `old-testament.json`.
When using the methods the data will be returned as either a single JSON object (for `get()`) or an array of Book Objects (for `getAll()`).

### Book Objects

| Property | Type |  Optional |
| --- | --- | --- |
| `titles` | [Title](#title-objects) | `false` |
| `order` | [Order](#order-objects) | `false` |

### Title Objects

A title object is a simple object with the name of a book with different languages as keys. 

This object is likely to expand in higher versions, with new additions being documented here.

| Property | Type | Description | Optional |
| --- | --- | --- | --- |
| `english` | `string` | The common English title of the book | `false` |
| `hebrew` | `Object` | | `true` |
| `hebrew.transliteration` | `string` | The transliteration of the original Hebrew title of the book | `false` |
| `hebrew.meaning` | `string` | The translation of the original Hebrew title of the book | `true` |

### Order Objects 

Order objects are assigned to a top-level order object on a book by a sortable key referring to their order within some canon. Currently the two canons accounted for in ordering are the Hebrew canon (Old Testament) and the Protestant canon (Old & New Testaments).

| Property | Type | Description | Optional |
| --- | --- | --- | --- |
| `global` | `number` | A number indicating the order the book occurs in across the whole testament. | `false` |
| `section` | `Object` | | `false` |
| `section.title` | `string` | The traditional title of the section of the Bible according to the given canon | `false` |
| `section.sequence` | `number` | The order in which the book appears in the given section of the given canon | `false` |
| `section.subtitle` | `string` | An optional subtitle of the subsection to which the book belongs in the given canon | `true` |
| `section.joinedWith` | `string` | Certain books that are two books in one canon are considered a single book in other canons. This field references the ID of the book for which it shares a book in the given canon | `true` |

## License

[VOL](http://veryopenlicense.com/) • Made by me, but use how you want.
