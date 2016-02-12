# CSS: IT'S FUN AND HEALTHY, TOO!

Do the following instructions on index.html and style.css in this folder

1. Navigation
- Inside the nav element, delete the heading and replace it with 3 <li> tags in an unordered list.
- Within each list element, place an <a> and make the text inside of each <a> "Portfolio", "Bio", and "Contact", respectively. Set the href property on the <a> tag equal to "#". This will simply direct the link back to the same page.   
- In your css file, underneath where you see the style for the nav (you want to keep all of your navigation styles in the same place), select only the <ul> tag that is inside of the <nav> and give it the following styles...

```css
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
```

- Now select all li elements inside the ul, inside of the nav (phew!) and make them float left.
- Nowww select all of the a tags inside those li elements (sooo much nesting) and give them the following styles

```css
  display: block;
  width: 120px;
  height: 50px;
  font-weight: bold;
  color: #000;
  background-color: transparent;
  border: 2px solid grey;
  margin: 25px 10px;
  text-align: center;
  padding: 10% 0;
  text-decoration: none;
  text-transform: uppercase;
```

2. Aligning Left and Right
- Try floating all of your nav li elements to the right, then move them back to the left.
- Try giving only one of you nav li elements an id of 'right' and then float just that one right. Remove the ID if you hate how this looks.
- Give your nav element a left margin so that it lines up with the blue boxes on the page, then set it back to 0.
- Find the aside in the CSS, erase its 'right' property and set its 'left' property to 0.
- How should you change the style on the large section so that it is flush with the right side?

3. Layout
- Locate the p tags in each of the small boxed and briefly write your answers to the following five questions in each, respectively
- What is the default display style of a div tag?
- What is the best way to horizontally center an element?
- What is the difference between padding and margin?
- What is the difference between fixed and absolute positioning?
- What is a 'clearfix'?
- Give all of your p tags a margin of 0px and give your boxes a top/bottom padding of 10px and a right/left padding of 5px, using CSS shorthand
- **Bonus** Without adding any new IDs or classes, give each of your p tags a different font color from this [page](http://www.crockford.com/wrrrld/color.html). You will need to look up what first-child, last-child, and nth-child pseudo-classes are.
- Set your header, aside, and footer position to 'fixed', add a margin-top of 150px to your aside and set your body height to 2000px. Scroll down and see what happens.

4. Experiment!
- Go to [http://www.cssdesk.com/](http://www.cssdesk.com/), copy and paste your CSS and HTML into the appropriate areas and try adding different colors, display properties, position properties, borders, etc to your elements. Make the layour completely unrecognizable.
