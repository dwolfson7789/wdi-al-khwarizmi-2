# Afternoon Lab Agenda

- Design Exercise  (30 mins)
- Implement first feature (1 hr)
- Test + Squash bugs (15 mins)
- Repeat for next feature ( ~1 hr and 15 mins)

### Lab

- We'll be creating a voting record web app that uses the congress api provided
by the New York Times.
- Part 1: Create a search that takes the name of a congress person and displays
their information. Hint: Make a request for all the members of congress and
then filter or loop until you find your match. Have your user select house or
senate to narrow the amount of members.
- Part 2: Find the voting record and display it for the member that the user searched
for.
- Part 3: List the names and voting records for all potential presidential
candidates.
- Part 4: Compare and contrast voting records of democratic candidates and
republican candidates.
- Part 5: Use the article search API to get related news about all presidential
candidates. also update the first part of your app so when the use searches
for a congress person your app looks up any recent articles on that person.
- Bonus: Develop another app using another NYTimes service. Please repeat the
same design-implement-test process outlined.


### Setup

- find a partner, you'll be pair programming and pair designing.
- Sign-up for an account: https://myaccount.nytimes.com/register
- get keys for congress API + any other you would like to use (after logging in): http://developer.nytimes.com/apps/mykeys
- read the description of the congress api: http://developer.nytimes.com/docs/congress_api


#### Design (DO NOT SKIP THIS)

Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs


- Gather requirements (for each part)
- Determine scope of work by playing with the ny times api console and it's responses http://developer.nytimes.com/io-docs and http://developer.nytimes.com/docs/congress_api#h2-responses
- Create a flow chart http://creately.com/blog/diagrams/flowchart-guide-flowchart-tutorial/
  - make sure you get the data you need before you display it to the user or
  create a template with it.
  - determine the "shape" of your data and how you'll be organizing and showing it in your app.
- Pseudocode parts of your program using the flow chart as your model.
- Create a user story for your app (ie "user should be able to search for congress person")
  - http://www.agilemodeling.com/artifacts/userStory.htm
- Visual design: https://philipwalton.github.io/solved-by-flexbox/
  - Choose one or more designs to incorporate into your app.
- Look at previous in-class applications to

### Implement
- Follow the lab instructions for each part.
- PAIR PROGRAM

### Test
- Handle common errors like empty forms or if the api comes back with nothing.


### The Golden Principle of Al-Khwarizmi
- Break down each problem into a number of elemental or ‘atomic’ steps. An elemental or atomic step is one, which cannot be simplified any further.
- Second, arrange all the elements or steps of the problem in an order or sequence, such that each element can be taken up and solved one at a time, without affecting other parts of the problem.
- Next, find a way to solve each of the elements separately.
- Then proceed to solve each element of the problem, either one at a time or several at a time, but in the correct order. Thus, when all steps are solved, the original problem itself has also been solved.
