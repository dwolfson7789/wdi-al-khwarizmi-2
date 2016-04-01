# React Lab

#### Remember:
Today is about learning **concepts**. Make sure you understand on a high level and don't get hung up on small details.

### Draw the UI of components (10 minutes)
- Go to [Delivery.com](www.delivery.com) (our special guest for tomorrow works there). Do an initial search for your zip code, then on the results page, draw out the React components like I did on the board. Which children components go inside parent components? Which is the final, single parent component that you will render to the DOM? There are a lot of different ways up the mountain, as you read in Thinking in React.
- Check out a few more simple websites - how would you draw out that UI?

### Get Setup (15 mins)
- Follow the directions in the React Cheatsheet to get started.

### Understand (30 minutes or as long as you need)
- Reread the concepts in the lesson
- Check out my demo code; run through each example one at a time & see if you feel comfortable with what's going on in each. Inspect each one using React developer tools.
- In your app, write a few basic hello world examples to get up and running, then...

### Lab exercises:
- After you write your Hello World examples & feel comfortable, write your very first React app. Use the `.createClass()` function to create a react component. In the `render` function, return a div with a class of `my-div` with two `p` tags. Create two variables, one for the string "hello", another for the string "world". Insert these two strings into the `p` tags dynamically.
- In your next example, create 2 react components, include both of them in a 3rd component, and render that component to the DOM.
- In your next example, create three components & one component that will be the parent for all 3. In the parent component, give the 2nd and 3rd components `props` that are arrays. One array will be a list of 3 cities on the East coast and the other 2 on the West. Then, in the 2nd & 3rd components, loop over their `props` to create `<li>` elements.

### If you get done early:
- Check out some of the resources at the bottom of the lesson markdown file or some that Syed gave you. There are great articles & videos that will increase your understanding.
