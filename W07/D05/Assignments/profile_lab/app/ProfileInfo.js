import React from 'react';




const ProfileContainer = React.createClass ({
  render (){
      const ProfileImg = 'http://www.drodd.com/images8/funny-face-photo13.jpg';

      return (
        <div>
          <img src={ProfileImg}/>
          <h3>DREW & MATT</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
  }
});

const ProfileInfo = React.createClass ({
  render () {
    const divStyle = {
      color: 'red';
    };
    return (
      <div style= {divStyle}>
        <ProfileContainer></ProfileContainer>
      </div>
    )
  }
});

export default ProfileInfo;
