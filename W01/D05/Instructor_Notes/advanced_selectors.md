# CSS - Advanced Selectors

## Lesson Objectives
1. Explain why we need advanced selectors
1. List advanced selectors

## List advanced selectors

### Family Selectors

1. *
	- have to add lots of classes
	```html
		<div>
			<a class="style-me">content</a>
			<a class="style-me">content</a>
			<span class="style-me">content</a>
		</div>
	```
1. >
	- nesting can be a pain
	```html
		<ul>
			<li>
				<ul>
					<li></li>
				</ul>
			</li>
		</ul>
	```
1. +
	- horizontal context difficult
        - immediate sibling
	```html
		<h1>Title</h1>
		<p>paragraph</p>
		<ul>
			<li><p>list paragraph</p></li>
		</ul>
	```
1. ~
	- extension of +
        - any sibling
	```html
		<h1>Title</h1>
		<ul>
			<li><p>list paragraph</p></li>
		</ul>
		<p>paragraph</p>
	```

### Attribute Selectors

Here's our example: `<a href='http://www.google.com'>link</a>`

1. [attr]
	- test to see if an attribute exists
	- `a[href]`
1. [attr='foo']
	- test an exact match
	- `a[href="http://www.google.com"]`
1. [attr^='foo']
	- test the start of the attribute
	- `a[href^="http"]`
1. [attr$='foo']
	- test the end of the attribute
	- `a[href$="com"]`
1. [attr*='foo']
	- test a substring
	- `a[href="w.goo"]`
1. [attr~='foo']
	- test an exact word separated by space
	- `<a data-values="value1 value2">link</a>`
	- `a[data-values~="value2"]`
1. [attr|='foo']
	- test the start of a hyphenated word
	- `<html lang="en-US">`
	- `html[lang|="en"]`
