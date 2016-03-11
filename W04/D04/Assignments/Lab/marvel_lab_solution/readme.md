 # Marvel API App

## Part I: setup
- Take a couple minutes to get familiar with the Marvel API docs: https://developer.marvel.com
- Register for an API key.
- Add `localhost` to Your Authorized Referrers list here: https://developer.marvel.com/account
- Create a new folder in al-kwharizmi with HTML, CSS & JS files.
- Do the basic setup for your HTML file (connect your JS & CSS files, etc.) & include an H1 that says `Marvel API`. Also don't forget to include the jQuery & Handlebars CDNs.

```html
<script src="https://code.jquery.com/jquery-2.2.1.min.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js" charset="utf-8"></script>
```

- Create a file called `apiKey.js`. Inside, add a global variable called `MARVEL_PUBLIC_API_KEY` and set it equal to your public key.
- Create a file called `.gitignore` - yes it should have a dot in front.
- In that file, simply add the name of the file you just created: `apiKey.js`
- From the root of your new directory, type in `http-server` in Terminal (remember you guys used this for the Speech Recognition API. If you didn't install it for some reason, just type `npm install -g http-server` from anywhere in your Terminal. It's a simple file server that helps us access the API.)
- Navigate to `localhost:8080` in your browser (yours may not be `8080`, check your terminal)

## Part II: get up & running
- Check out the 6 main endpoints that the API offers: Characters, Comics, Creators, Events, Series, Stories: http://developer.marvel.com/docs
- Remember what an endpoint is? Of course you do. It's a URL we use to access the API's data. Sometimes there are multiple endpoints, it depends on the API.
- In your HTML, create a `dropdown` element with the names of 2 of the endpoints: `characters` & `comics`.
- And create a submit button.

## Part III: When a user chooses `Characters` from the dropdown:
- An input box should appear where they can type in the `name` of a character they'd like to search for (example `hulk`).
- When the user clicks the submit button, make an API call to the endpoint `characters` with the query string `name` (which is the value of the input box)
- Hint: your URL should follow this structure: endpoint url + ? + your api key + & + `name` query string
- Parse the return object until you find these properties. Append them to the DOM with vanilla JS:
  - Name of the character
  - ID
  - Description
  - Thumbnail (this one is slightly tricky! You have to add the `extension` to the end of the `img` and set this url as the source of an img tag. Check out Tuesday's API demos for examples).

## Part IV: When a user chooses `Comics`:
- A different input box should appear where they can type in the `title` of the comic they'd like to search for (example `spider-man`).
- When the user clicks the submit button, make an API call to the endpoint `comics` with the query string `title` (the val of the input box)
- The return object will contain an array of about 20 results somewhere in it.

**bonus**
- Each item in this array of 20 will contain a property called `issueNumber`
- Append 3 radio buttons & a different submit button to the page.
- The radio buttons should ask the user if they'd like to see issue numbers 1-10, 10-20, or 20+.
- When the user clicks this submit button, get the value and perform a filter function on the return data to filter only the issue numbers they want. Append these results to the page.

**skip down here if you don't want to do the bonus**
- For each of the 20 results, append the following properties to the page **using a template**:
  - id
  - title
  - page count
  - description
  - thumbnail
  - price
- Hint: parse the response & put each of these properties into a new object called `context`.  
