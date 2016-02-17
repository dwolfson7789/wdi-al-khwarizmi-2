# More DOM, More Problems

### Learning Objectives
- Create new elements
- Insert new elements into the DOM
- Move elements in the DOM from one place to another
- Traverse the DOM from a starting node

#### Creating within the document
- document.createElement (benchmarking shows this is the fastest...)
```
var element = document.createElement('h1');
```
- document.createTextNode
```
var greetings = document.createTextNode('greetings');
```

• create element doesn't attach it anyway. It just creates that HTML element in the browsers runtime memory. You will have to attach this manually.

• createTextNode creates a text node that houses a string. It creates the node to be put into an element but it isn't attached yet. You will have to attach this manually.


#### Traversing nodes
- node.childNodes
```
var paragraphs = document.getElementById('content-container').childNodes

```
Or if we might be calling content-container more than once, let's keep it DRY and set it as a variable
```
var contentContainer = document.getElementById('content-container');
var paragraphs = contentContainer.childNodes;
```
- node.children
```
var paragraph = contentContainer.children;
```

#### DOM editing
- node.appendChild (adds to the very bottom)
```
var brandNewH1 = document.createElement('h1');
var contentContainer = document.getElementById('content-container');
contentContainer.appendChild(brandNewH1);
```

- node.remove (we can remove that same node by using removeChild on the contentContainer)
```
contentContainer.removeChild(brandNewH1);
```

#### Node Editing
- node.innerHTML: sets or returns the elements descendants
```
contentContainer.innerHTML;

var header = document.getElementById('header-container');
var newGreeting = "Hello, this greeting is so much better";
header.innerHTML = newGreeting;
console.log(header);
```

- node.id: sets or returns an id to an HTML node
```
var header = document.getElementById('header-container');
header.id = "new-header-container";
console.log(header.id);
```

- node.classList: returns a list of class(es) for that element
```
var contentContainer = document.getElementById('content-container');
var firstParagraph = contentContainer.children[0];
console.log(firstParagraph.classList);
firstParagraph[0];
```

- node.setAttribute: sets attributes to a node
```
var header = document.querySelector('#header-container');
header.nodeType;

header.setAttribute("style", "background-color: green;");
```
