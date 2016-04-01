 import React from 'react';
/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

const FriendsContainer = React.createClass({
  render(){
    const friends = ['Ivan', 'Tims', 'Kaho']
    return (
      <div>
        <h3>Name Yay: {this.props.children}</h3>
        <ShowList names={friends} />
      </div>
    )
  }
});


const ShowList = React.createClass({
  render: function(){
    // yess
    var listItems = this.props.names.map(function(friend){
      return <li> { friend } </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

// fn(d)=v

const HelloFriends = React.createClass({
  render() {
    return (
      <div>
        <h2>Hey this is, {this.props.name}, ok</h2>
        <FriendsContainer> {this.props.name} </FriendsContainer>
      </div>
    );
  }
});

// little help from my module friends
export default HelloFriends;
