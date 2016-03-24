 # SWAPI API

## Part I: Get familiar with the API
- Take a couple minutes to poke around the API docs: `swapi.co`
- No API key necessary
- Make a few sample calls on the home page
  - If you're having trouble, make sure you type in the URL exactly as above, no `https`
- Identify the `base URL` & the 6 main `endpoints`

## Part II: Setup
- Create a new folder in al-kwharizmi with HTML, CSS & JS files.
- Do the basic setup for your HTML file (connect your JS & CSS files, etc.) & include an H1 that says `SWAPI API`.
- In your JS file go ahead and set up the skeleton - a window.onload fxn & the skeleton of an AJAX call
- Also don't forget to include the jQuery & Handlebars CDNs

## Part III: Lab
- On the homepage of the API docs, make an api call to `/people` --- Notice that the API docs tell you there are 87 `people` total in the API, but you only get 10 at a time in a response.
- Create a dropdown with the names of the first 10 `people`. The `value` attribute of the `option` tag should be that character's `id`
- `Bonus` In your website upon page load, make the API call to `/people` and create the dropdown dynamically by looping over the returned data. It may help if you do this statically first.
- Create a `submit button` beneath the dropdown
- Attach an event listener to the submit button that makes an API call & fetches all the information for the chosen character.
- Append the following information to the DOM using a `handlebars template`:
  - name
  - birth_year
  - gender
  - hair_color
  - height
  - skin
  - *loops*: (just list the URLs)
  - films
  - species
  - starships
  - vehicles
- *Hint for one-demensional loops in HBS:*
``` javascript

<p>Films:</p>
<ul>
  {{#each films}}
    <li><strong>Film:</strong>{{this}}</li>
  {{/each}}
</ul>

```

## Part IV: Daisy chaining AJAX
- In the `.done` function, make *another* AJAX call to find out the chosen character's `homeworld`. Use the `url` they provide you in your AJAX call.
- Append the info about the `homeworld` to the DOM using *another* HBS template.
- `Bonus` Do additional AJAX calls for the `loops` above for the chosen character.
