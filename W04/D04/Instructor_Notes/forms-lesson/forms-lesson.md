# HTML Forms

### Lesson objectives:
- Explore a few different form elements
- Get values from form elements with JS
- Take a look at documentation so we feel more comfortable with it!

### Form Elements Cheatsheet
Form element
- All the elements for a single form are encased in `<form>` tags
- The `action` attribute: the URI, or file name, of a program that processes the information submitted via the form (example `sign-up-form.php`).

Text input box
- `<input type='text'>`
- No closing tag because input tags are weird.
- How do we get what the user typed in using js?
``` js
var apiInputBox = document.getElementById('api-input');
var userChosenMovie = apiInputBox.value;
```

Checkbox
- `<input type='checkbox'>`
- You would think there would be a `checkbox` element. But this one is an input tag too! So weird.
- How do we tell our form that these checkboxes are in a group? By giving each checkbox the same `name` attribute.
- Checkboxes allow you to select multiple answers

Radio Buttons
- `<input type="radio">`
- Very similar to `checkboxes`, but user can only choose one
- How do we tell our form that they're in a group? Also with the `name` attr.
- The name attribute must be present to enable only choosing one option.

Dropdown (or `select`)
- `<select>`
- Behave like radio buttons - you can only choose one
- The `name` attr is on the `select` element, *not* the `option` elements

The submit button
- Push to send the form info to the db.
- Two ways: `input` tag with `type="button"` or `button` element


### Exercise:
Remember the OMDB api? Of course you do. Create a small form using any two elements *except a text input box* and make an API call based on user input. For example, you could have 3 `checkboxes` with 3 movie titles for the user to select, and a `dropdown` allowing them to choose `yes` or `no` if they'd like to see Tomato results with their query.

Find out how to get the value that the user selected depending on the form element you chose. When they hit Submit button make your API call using those query strings!


### Resources:
- https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms
