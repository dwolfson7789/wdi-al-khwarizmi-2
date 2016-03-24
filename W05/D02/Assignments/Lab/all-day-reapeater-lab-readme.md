# API Repeater Lab - NYTimes APIs

### Agenda:
- First round: til noon
- Second round: 1:15 - 2:15
- Third round: 2:30 - 3:30
- Homework

### Lab:
- *Note:* You may have to register for additional keys for each API
- 15 mins of planning 
- Allow the user to choose between the `Newswire`, `Books`, and `Movies` APIs
- If they choose `Newswire`, display the following properties of the first 5 stories using a HBS template:
  - title
  - abstract
  - byline
  - section
  - subsection
  - thumbnail_standard
  - The following from the first item in the `multimedia` property:
    - url (display as pic)
    - caption
- If they choose `Books`:
  - Make an input box show that allows the user to search for reviews by book title (you may either use an input box or hard code a couple of choices in a dropdown)
  - Append the following for each result:
    - book_title
    - book_author
    - byline (who wrote the review)
    - summary
    - publication_dt
    - url (in `<a>` tags)
    - each item in the `isbn13` array'
- if `Movies`:
  - Search by `recent NYT Critics' Picks on DVD, results 41-60` (hint: search for that text on the movies api page)
  - Append:
    - display_title
    - headline
    - summary_short
    - opening_date
    - dvd_release_date
    - The url to the review (link -> url)
    - thumbnail (multimedia -> resource -> src)
