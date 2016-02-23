## Lab: Manipulate the DOM with user input and handlers - Thermometer

#### Directions:

In this lab we will be writing javascript to make a thermometer app. Be sure to use tags like `<input>` to capture user input text, a `<button>` to add a button, and `<div>`'s accordingly.

NOTE: STARTER CODE DOES NOT PROVIDE HTML STRUCTURE. PSEUDO CODE AND THINK CAREFULLY ABOUT WHAT YOU NEED! START BY CREATING ALL THE HTML ELEMENTS YOU NEED IN THE BODY

0. Make sure your final submission is wrapped in a window.onload!
1. User puts in a value into the text field
2. User clicks on button
3. `div` gets updated with the desired temperature the user input.
4. Make a clear button to reset the fields

##### Afternoon Lab Directions
5. Add a setTimeout that will alert the user that "temperature" has been submitted 2 seconds after they have changed the temp
6. Add a setInterval that will console.log the current temperature setting every 5 seconds. Have this function operating on window load. The page can start with default temp set to 70 or null.
7. Create a function wrapping the clearInterval that will stop the setInterval when entered in the browser's console


### Event Bonuses
* Have the `div` be `blue` if the temp is freezing, `red`  for above freezing.
* Create a button called Timeout. Attach a click listener and set the wrapped clearInterval (from objective #7) as the handler for this click event.
* Create a function that converts the temp from degrees to celsius and vice versa.
* Use a `dropdown` or `radio` button to select different units to convert. Attach the appropriate handler to execute the above function.

### Style Bonus
* Insert into the bottom of the temperature display a new div who's width is equal to a percentage of the width of its parent element based on the current temperature.  For example, if it's 0 degrees out, have it take up 0%, up through 100 degrees.  
