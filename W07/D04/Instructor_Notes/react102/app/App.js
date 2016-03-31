import React from 'react';


const FriendsContainer = React.createClass({
  render(){
    var name = 'Syed'
    var friends = ['Ivan', 'Tims', 'Kaho']
    return (
      <div>
        <h3>Name: {name}</h3>
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

const HelloWorld = React.createClass({
  render() {
    return (
      <div>
        <h2>Hey this is, {this.props.name}, ok</h2>
        <FriendsContainer />
      </div>
    );
  }
});

// little help from my module friends
export default HelloWorld;
