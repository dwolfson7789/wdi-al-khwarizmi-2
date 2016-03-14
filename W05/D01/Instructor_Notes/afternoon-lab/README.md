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

- Sign-up for an account: https://myaccount.nytimes.com/register
- get keys for congress API + any other you would like to use (after logging in): http://developer.nytimes.com/apps/mykeys
- read the description of the congress api: http://developer.nytimes.com/docs/congress_api


#### Design
- Gather requirements (for each part)
- Determine scope of work by playing with the ny times api console. http://developer.nytimes.com/io-docs
- http://developer.nytimes.com/docs/congress_api#h2-responses
- Determine how you will loop through your objects, etc.
- Create user story for you app (ie "user should be able to search for congress person")
  - http://www.agilemodeling.com/artifacts/userStory.htm
- Visual design: https://philipwalton.github.io/solved-by-flexbox/
  - Choose one or more designs to incorporate into your app.

### Implement
- Follow the lab instructions for the corresponding portion.

### Test
- Handle common errors like empty forms or if the api comes back with nothing
display a friendly message like "sorry no one with that name was found".
