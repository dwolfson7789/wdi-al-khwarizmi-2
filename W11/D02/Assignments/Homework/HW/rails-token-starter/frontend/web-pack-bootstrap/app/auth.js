import axios from 'axios';
import ajaxHelpers from '../utils/ajaxHelpers';

module.exports = {
  login(email, password, afterLoginFxn) {
    if (this.loggedIn()) {
      // we are already logged in (have tokens), don't make api call
      if (afterLoginFxn) {
        afterLoginFxn(true);
      }
      return;
    }

    // we are not logged in, make login api call
    axios.post(ajaxHelpers.baseUrl + '/auth/sign_in', {
      email: email,
      password: password
    })
    .then(function (response) {
      // localStorage = {}

      // we successfully logged in. store the tokens in local storage and run the callback
      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.headers['access-token'];
      localStorage.client = response.headers.client;

      if (afterLoginFxn) {
        afterLoginFxn(true)
      }
    })
    .catch(function (response) {
      // we failed to login
      console.log('There was an error:', response);
      if (afterLoginFxn) {
        afterLoginFxn(false);
      }
    });
  },

  signup(email, password, password_confirmation, afterSignupFxn) {
    if (this.loggedIn()) {
      // we are already logged in
      if (afterSignupFxn) {
        afterSignupFxn(true)
      }

      return;
    }

    axios.post(ajaxHelpers.baseUrl + '/auth/', {
      email: email,
      password: password,
      password_confirmation: password
    })
    .then(function (response) {
      // we successfully signed up. store the tokens in local storage and run the callback
      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.headers['access-token'];
      localStorage.client = response.headers.client;

      if (afterSignupFxn) {
        afterSignupFxn(true)
      }
    })
    .catch(function (response) {
      // we failed to login
      console.log('There was an error:', response.data.errors);
      if (afterSignupFxn) {
        afterSignupFxn(false);
      }
    });
  },

  logout(afterLogoutFxn) {

    // afterLogoutFxn is the callback we passed in when we called `auth.logout` in index.js

    // ** grab the accessToken, uid, and client from `localstorage` here:

    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;

    // ** then make your ajax call, sending some data in the headers:
    axios.delete(ajaxHelpers.baseUrl + '/auth/sign_out', {
      headers: {
        'uid': uid,
        'access-token': accessToken,
        'client': client
      }
    })
    .then(function (response) {
      // ** we have successfully logged out. delete everything from localstorage using the `delete` keyword:
      // (This is literally the syntax:)

      // delete theThingYouWantToDelete
      // delete theThingYouWantToDelete
      // delete theThingYouWantToDelete
      delete localStorage.uid;
      delete localStorage.accessToken;
      delete localStorage.client;

      // if we have successfully logged out, we want to call our callback fxn & pass it the bool 'true'
      // so that it can update our successMsg
      if (afterLogoutFxn) {
        afterLogoutFxn(true)
      }

    })
    .catch(function (response) {
      // we failed to logout, so we call the callback fxn & pass it 'false'
      console.log('There was an error', response);
      if (afterLogoutFxn) {
        afterLogoutFxn(false);
      }
    });
  },

  // runs on pg load for FE to verify you're logged in; just checks to see if tokens exist
  loggedIn() {
    return (!!localStorage.uid && !!localStorage.accessToken && !!localStorage.client);
  },
}
