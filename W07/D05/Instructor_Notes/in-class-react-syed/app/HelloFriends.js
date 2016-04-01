import React from 'react';
/*
  Focused
  Independent
  Resusable
  Small
  Testable
*/
const FriendsContainer = React.createClass({
  render() {
    console.log(this);
    const friends = ['Matt', 'Aman', 'Drew']
    return (
      <div>
        <h3>{this.props.children}</h3>
        <ShowList names={friends} />
      </div>
    )
  }
})
const ShowList = React.createClass({
  render: function() {
    const divStyle = {
      color: 'red'
    };
          const friendsImg = ''
    var listItems = this.props.names.map(function(friend) {

      return <li> {friend} </li>;
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
})
const HelloFriends = React.createClass({
  render() {
    return (
      <div>
        <p>sup bruh?, first module!</p>
        <FriendsContainer> {this.props.name} </FriendsContainer>
      </div>
    );
  }
});
export default HelloFriends;
