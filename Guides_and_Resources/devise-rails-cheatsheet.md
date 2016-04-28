# Devise
- This is the main resource I use to implement Device token auth in rails:
  - https://github.com/lynndylanhurley/devise_token_auth  
- Add the following gems to gemfile; devise depends on these:
  - `gem 'devise'`
  - `gem 'omniauth', '~> 1.3', '>= 1.3.1'`
  - `gem 'devise_token_auth'`
  - `gem 'rack-cors', :require => 'rack/cors'`
  - `bundle install`
- Devise has an all-in-one command to generate a User model & routes
  - (it does a lot more than that)
  - `rails g devise_token_auth:install User auth`
  - After running, check out your user model & routes
  - The `auth` part of the command specifies that anything dealing with logging in will happen around the `'/auth'` route
- Make any changes to the `user` migration route that Devise generated (you probably won't need to)
- rake migrate your db
- Now we need to configure CORS
  - Follow the directions to add code to your config/application.rb
  - https://github.com/lynndylanhurley/devise_token_auth#cors
- In your application controller, see the comment and change "protect from forgery with" to `:null_session`
- When you get to the section called "Usage TL;DR", you can now assume all the paths in that table begin with '/auth' because that is what we specified in our command
- In `config/initializers/devise_token_auth.rb`, I changed "changed headers on each request" to false:
  - `config.change_headers_on_each_request = false`
  - Remember during our lesson when I said some apps will keep changing the user's tokens upon every request? You can turn that off.

---
Your app should now be ready to receive AJAX calls from the frontend (after you've done your regular Rails setup too). If not, refer to the guide, or check this one out from Rails girls to get up & running very quickly in a demo app.
- http://guides.railsgirls.com/devise
