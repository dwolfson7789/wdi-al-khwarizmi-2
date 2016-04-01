import React from 'react';

/*
  Focused
  Indepedent
  Resusable
  Small
  Testable
*/
const FriendsContainer = React.createClass({
  render(){
    console.log(this);
    const friends = ['Ivan', 'Tims', 'Kaho']
    return (
      <div>
        <h3>{this.props.children}</h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

const ShowList = React.createClass({
  render: function(){

    const divStyle = {
      color: 'red'
    };
    const friendsImg = 'http://images.clipartpanda.com/school-friends-clip-art-school1.jpg';
    const listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div style={divStyle}>
        <img src={friendsImg} />
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

const HelloFriends = React.createClass( {
  render() {
    return (
      <div>
        <p>hello from our first module</p>
        <FriendsContainer>  {this.props.name} </FriendsContainer>
      </div>
    );
  }
});

export default HelloFriends;
