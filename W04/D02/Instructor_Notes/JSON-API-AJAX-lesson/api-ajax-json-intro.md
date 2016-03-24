# Intro to APIs, AJAX, JSON

**Tuesday March 8th • Morning**

### Lesson Objectives
- Reference API docs
- Make API calls in the browser
- Define API `endpoint` // the URL where we can access raw data
- What is the purpose of API `query strings`?
- Make an API call from your website using `jQuery AJAX`
- Use jQuery's `promise` methods to handle AJAX responses
- Define `JSON` and describe when it can be used
- Define `CDN`
- Parse an API response
- Render new HTML content using data loaded from an Ajax request
- Install a JSON formatter (Chrome Extension)
- Register for API key

---


# Part I • Making API calls in the browser

**** computers closed ****

### Agenda:
Concept:
- We talked about the definition of an `API` during the Speech Recognition lesson
- API: `Application Programming Interface`
- At the end of the day, it's just a set of data provided for public use.
- We access that data through a URL called an `endpoint`

OMDB API:
- What does the OMDB API offer? Movie data.
- It returns a single movie that best matches your search
- example: I want all the data about the movie Titanic
- Make a request to that api (which is just a store of data) & get back the data I want

Let's check out the OMDB docs!
- Check out the OMDB docs to find out how to construct queries
- Review the parts of the API:
  - What is the `endpoint`? // the URL we use to access the data
  - `Parameters`
  - What are `query strings`? // the way we specify the data we want
- Formula of a query: using `?` and `&`
- Example queries:
  - http://www.omdbapi.com/?t=buffy
  - http://www.omdbapi.com/?t=buffy&y=1992&type=movie
  - http://www.omdbapi.com/?t=buffy&type=series
- Why do we need query strings?
  - We don't want all the data from the set, so we specify what we want by using `query strings`
  - The people who built the API designed the query strings for this purpose

**What is this Javascript object thingie it's returning?**

### What is serialized data?
All data sent via HTTP must be in string format. Since we need to send structured data, as in arrays & objects, we need to put it in a *string representation* of that data. We can then transmit that string. After it is received, we can parse it back into Javascript.

There are **two** major serialized data formats:  

### 1- `JSON`
`JSON` stands for "JavaScript Object Notation", and has become a universal standard for serializing native data structures for transmission.

```json
{
  "users": [
    {"name": "Bob", "id": 23},
    {"name": "Tim", "id": 72}
  ]
}
```

**What's the difference between `JavaScript` and `JSON`?**
- See how JSON has strings around the keys? Javascript does not.
- This is because JSON is a **string representation** of the Javascript data we're sending.
- This is the Javascript version of the JSON above:

```javascript
{
  users: [
    { name: "Bob", id: 23 },
    { name: "Tim", id: 72 }
  ]
}
```

### 2- `XML`
* `XML` stands for "eXtensible Markup Language", and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly, and cumbersome to parse. However, it remains a major format due to its legacy usage across the web.

```
<users>
  <user id="23">
    <name><![CDATA[Bob]]></name>
  </user>
  <user id="72">
    <name><![CDATA[Tim]]></name>
  </user>
</users>
```

**Many APIs publish data in multiple formats, for example...**
* [http://www.omdbapi.com/?t=brave&r=json](http://www.omdbapi.com/?t=brave&r=json)
* [http://www.omdbapi.com/?t=brave&r=xml](http://www.omdbapi.com/?t=brave&r=xml)
* [http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL)
* [http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL)


###### Small exercise: 15 minutes
Construct OMDB queries to find the answers:
- What is the plot for Tarzan (1999)?
- Who are the main actors in Tarzan (2016)?
- Who directed Home Alone 2 (1992)?
- Who is the main actor in The Emperor's New Groove?
- What is the `tomatoMeter` (a number) for Lilo & Stitch?
- And what is the `DVD` release date?
- Who is the director of the 2009 movie Sherlock Holmes?
- In what year did Sherlock the TV series begin? (the one with Benedict Cumberbuns)


---


# Part II • Making API calls from our website
**We've been making API calls in the browser, but how do we make them from our website?**

***** Laptops closed *****

### Live demo
Part I:
- New HTML & JS files
- When we click button, make API call
- Log the response

Part II:
- Add HTML elements where we want to append text
- Parse response into variables
- Append to DOM with vanilla JS

### What is a CDN?
- Content Delivery Network
- An easy way for us to use the jQuery library without downloading it
- Caveat: must be connected to interwebs for it to work

### What is jQuery?
- A library that extends the functionality of Javascript
- Only going to be looking at the AJAX method today

### What is AJAX?
- AJAX stands for "Asynchronous Javascript and XML" (AJAX)
- Nowadays indicates a set of technologies that allow us to make requests that *do not* reload the page
- How does it work? Server-side requests are sent asynchronously on the client without having to send an actual browser request that reloads the page.

### Parts of the jQuery AJAX method
- Promises: kind of like an if statement -- tells the computer what to do upon done, fail or always

### API keys
While the majority of APIs are free to use, many of them require an API "key" that identifies the developer that is requesting data access. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

**Try hitting the Giphy API:**

* No key: [http://api.giphy.com/v1/gifs/search?q=funny+cat](http://api.giphy.com/v1/gifs/search?q=funny+cat)

* With key: [http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC)

> It is very important that you not push your API keys to a public Github repo.

##### JSON Formatter Chrome Extension
https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en

###### Small exercise: build an AJAX request • 15 minutes  
- I'll push my demo code


---

# Afternoon Lab
### Warm up - Shake It Spear API - about an hour - work alone
Part I: Make API calls in the browser
- API: http://shakeitspeare.com/
- Example site: http://shakespearewalksintoa.pub/
- Check out the API docs & find the endpoint URLs
- There is one unlisted query string for poems: lines - up to 30
  - Example: http://shakeitspeare.com/api/poem?lines=20
- Make calls in the browser using each endpoint

Part II: Make API calls from your website
- Make a directory with new HTML and JS files
- Start by creating an HTML button with an event listener that logs 'Hello'
- Next, build your AJAX method and log the response data
- Now, instead of logging the response data, parse it into variables and append them to the page using JS

### Weather Underground API - rest of the afternoon - work in pairs
- http://www.wunderground.com/weather/api/d/docs
- Check out the docs but don't be scared.
- Register for an API key (should take about 15 mins)
- After you get your key, go back to `Documentation`; it will show you an example use of the `conditions` (also called `current conditions`) endpoint using your key
- Identify the `conditions` endpoint URL & the formula for WU's API call
- Repeat exercise above:
- Part I: Construct 5 basic queries for different cities & states & **make them in the browser** first
- Part II: Then make API calls **from your website** (create new HTML & JS files)
  - First log the response from a hard-coded AJAX request in the console
  - Then create an input box where the user will type in a city
  - Append the city name, state, zip code, `weather`, `temperature_string`, `relative_humidity`, wind direction, wind mph and `feelslike_f` values to the DOM
  - Don't forget to add the jQuery CDN in your HTML like we did in the demo from earlier

Bonuses:
- \#1 Depending on what the `weather` property evaluates to (ie: partly cloudy, sunny, etc.) change the background to an appropriate image
- \#2
There is also a `wind_string` variable (calm, super windy, etc.). Make the h1 move proportionate to the strength of the windyness. CSS animations! 
