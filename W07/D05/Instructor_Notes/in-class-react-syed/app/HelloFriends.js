import React from 'react';
<<<<<<< HEAD
/*
  Focused
  Independent
=======

/*
  Focused
  Indepedent
>>>>>>> f3b38bdbb39cc4e9d3737c2b254af73ee9a8ddfe
  Resusable
  Small
  Testable
*/
const FriendsContainer = React.createClass({
<<<<<<< HEAD
  render() {
    console.log(this);
    const friends = ['Matt', 'Aman', 'Drew']
=======
  render(){
    console.log(this);
    const friends = ['Ivan', 'Tims', 'Kaho']
>>>>>>> f3b38bdbb39cc4e9d3737c2b254af73ee9a8ddfe
    return (
      <div>
        <h3>{this.props.children}</h3>
        <ShowList names={friends} />
      </div>
    )
  }
<<<<<<< HEAD
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
=======
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
>>>>>>> f3b38bdbb39cc4e9d3737c2b254af73ee9a8ddfe
      </div>
    );
  }
});
<<<<<<< HEAD
=======

>>>>>>> f3b38bdbb39cc4e9d3737c2b254af73ee9a8ddfe
export default HelloFriends;
