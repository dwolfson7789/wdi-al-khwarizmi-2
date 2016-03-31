import React from 'react';
import ReactDOM from 'react-dom';
import HelloFriends from './HelloFriends';
import ProfileComponent from './ProfileComponent';

ReactDOM.render(
  <div>
  <HelloFriends name="Syed" />
  <ProfileComponent />
  </div>,
  document.getElementById('app')
);
