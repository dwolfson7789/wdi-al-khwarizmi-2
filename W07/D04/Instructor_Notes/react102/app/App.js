import React from 'react';

const HelloWorld = React.createClass({
  render() {
    return (
      <h2>Hey this is, {this.props.name}</h2>
    );
  }
});

const FriendsContainer = React.createClass({
  render: function(){
    const name = 'Syed'
    const friends = ['Ivan', 'Joe', 'Kunal']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
})

// little help from my module friends
export default HelloWorld;
