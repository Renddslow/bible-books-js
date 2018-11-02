# Bible Books

Access the books of the Bible in the traditional Hebrew and Protestant canon with a few handy methods.

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
| `english` | String | The common English title of the book | `false` |
| `hebrew` | Object | | `true` |
| `hebrew.transliteration` | String | The transliteration of the original Hebrew title of the book | `false` |
| `hebrew.meaning` | String | The translation of the original Hebrew title of the book | `true` |

### Order Objects 

Order objects are assigned to a top-level order object on a book by a sortable key referring to their order within some canon. Currently the two canons accounted for in ordering are the Hebrew canon (Old Testament) and the Protestant canon (Old & New Testaments).

| Property | Type | Description | Optional |
| --- | --- | --- | --- |
| `global` | Number | A number indicating the order the book occurs in across the whole testament. | `false` |
| `section` | Object | | `false` |
| `section.title` | String | The traditional title of the section of the Bible according to the given canon | `false` |
| `section.sequence` | Number | The order in which the book appears in the given section of the given canon | `false` |
| `section.subtitle` | String | An optional subtitle of the subsection to which the book belongs in the given canon | `true` |
| `section.joinedWith` | String | Certain books that are two books in one canon are considered a single book in other canons. This field references the ID of the book for which it shares a book in the given canon | `true` |
