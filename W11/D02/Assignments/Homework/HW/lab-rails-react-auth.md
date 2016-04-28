# Lab

### Your mission:
In class, we successfully **registered** a user, **logged them in** and allowed them to see a special page (products), and **logged them out**.

But oh noes, it looks like the code for **logging users out** has gone missing.

Your job is to put that code back in.

### Notes & tips & stuff
- We are focusing on the **front end** during this lab.
- I have put two little stars `**` in places where you need to fill out code. 
- Remember how to start up the FE & BE of your app after you pull? Refer to the Rails cheatsheet in the root folder of our WDI repo (in resources) for help.
- The `register` and `login` functionalities of the app still work.
- If you need to manually log someone out while you develop, pop the console in the browser, navigate to Resources > Local Storage > http://localhost:8080 and literally hit the delete key to delete the user's tokens. Refresh the page & you'll be logged out.

---
#### FYI Some resources I used to put this lesson together:
- React auth example from official docs:
  - https://github.com/reactjs/react-router/tree/master/examples/auth-flow
- Devise Rails gem
  - https://github.com/lynndylanhurley/devise_token_auth
- Great article on encryption vs. hashing vs. salting
  - https://gooroo.io/GoorooTHINK/Article/13023/The-difference-between-encryption-hashing-and-salting/2085#.Vx9N76MrLGI
