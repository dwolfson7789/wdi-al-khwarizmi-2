# Auth in a Rails/React app

### Part 1

### Authentication has a lot of moving parts
- Decide when to require login
- Sign up with username & password
- Keep track of users
- Salt/hash passwords
- Confirmation of successful sign up
- Create a way to login
- Display errors when login fails
- Create way to email the user their password
- User profile pages to manage account

### Types of auth:
- Session-based authentication
- OAuth (3rd party login)
- Token-based authentication



---
### Part 3 - Token based Auth & passwords

### How token-based auth works
1. User **signs up** with username, password & password confirmation.
1. The app checks that the password & password confirmation match.
1. The app **hashes** & **salts** the password before storing it in the DB.
1. Now the user can **log in** with username/password (sometimes this happens automatically after signup).
1. The app validates the credentials against what is in the DB, then
1. The app assigns a **token** to the user's client (browser) to store in **local storage**
1. The client stores token & sends it with every request in the HTTP header
1. Server verifies token before sending back the requested data

### Hashing & Salting?
- [Great article on encryption vs. hashing vs. salting](https://gooroo.io/GoorooTHINK/Article/13023/The-difference-between-encryption-hashing-and-salting/2085#.Vx9N76MrLGI)
- **Encryption:** using a clever code to transform your message. The receiver must also have this code so they can decode the message. Otherwise it's pointless.
- **Hashing:** Encoding the message with a complex algorithm that will never be decoded. Useful for storing things that you don't need to read, but need to check. Example: passwords. When a user signs up, their password is hashed before going into the DB. It looks something like this:
  - My password: `iLoveKittehs` ==> Hashed: `fd870b20869d9ae05d84e3d7fbed0c94`
  - When they try to sign in next time, the password they entered is hashed using the same algorithm, which should produce the same salted pw as when they originally signed up. The app then compares the passwords.
- **Salting:** Sprinkling `salt` on your tasty password hash can help protect people who choose very common passwords. The `salt` is just an extra phrase that gets added to your raw pw before it gets hashed.
  - My password: `iLoveKittehs` + a little `salt`: `042616` ==> Hashed: `b290557177ec5dd7098d1de84616dd04`
  - Salts can be random for each password entered
  - Can be a combination of random "phrases": today's date, a secret phrase and the user's security question, etc.
  - Even if someone figures out the salt formula, they'll still have trouble.


### Token-based auth
- JSON web tokens is the standard for token auth
- Do not store any info about the user on the server or in a session

---
### Part 4

### What we'll be using today
Rails Backend:
- `devise`
- `devise_token_auth` (for Rails API)
- `omniauth`
- `rack-cors` (for CORS)

React Frontend:
- `browserHistory`

















#
