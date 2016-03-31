/**** Part 1 - Getting Started ***/

// var React = require('react');
// var ReactDOM = require('react-dom');
//
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('react-app')
// );





/**** Part 2 - Custom Component And Using className ***/

// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var HelloMessage = React.createClass({
//   render: function() {
//     return (
//       <div className="hello-message">
//         <h1>Hello, world! I am React.</h1>
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('react-app')
// );









/**** Part 3 - Composing Components ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var HelloMessage = React.createClass({
//   render: function() {
//     return (
//       <div className="hello-message">
//         <h1>Hello, world!</h1>
//       </div>
//     );
//   }
// });
//
// var Body = React.createClass({
//   render: function() {
//     return (
//       <div className="list-div">
//         <ul>
//         	<li>This</li>
//         	<li>is</li>
//         	<li>a</li>
//         	<li>list</li>
//         </ul>
//       </div>
//     );
//   }
// });
//
// var App = React.createClass({
//   render: function() {
//     return (
//     	<div className="App">
//   			<HelloMessage />
//   			<Body />
//     	</div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// );











/**** Part 4 - Expressions and Props ---> dynamic ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var HelloMessage = React.createClass({
//   render: function() {
//   	var title = 'Hello World';
//     return (
//       <div className="hello-message">
//         <h1>{title}! I am an h1</h1>
//       </div>
//     );
//   }
// });
//
// var MyCustomSection = React.createClass({
//   renderTheList: function() {
//     var result = [];
//     for (var i = 0; i < this.props.listData.length; i++) {
//       var innerHtml = this.props.listData[i];
//       result.push(<li key={i}>{innerHtml}</li>);
//     }
//     return result;
//   },
//   render: function() {
//   	var itemCount = this.props.listData.length;
//     return (
//       <div className="list">
//       	<p>I have {itemCount} items in my list</p>
//         <ul>
//         	{
//             this.renderTheList()
//         	}
//         </ul>
//       </div>
//     );
//   }
// });
//
// var App = React.createClass({
//   render: function() {
//   	var listData1 = ['Apples', 'Bananas', 'Carrots'];
//   	var listData2 = ['Cats', 'Dogs'];
//     return (
//     	<div className="App">
//         <HelloMessage/>
//         <MyCustomSection listData={listData1} />
//         <MyCustomSection listData={listData2} />
//     	</div>
//     );
//   }
// });
// ReactDOM.render(
//   <App />,
//   document.getElementById('react-app')
// );








/*** Part 5 • Props with Styles + loops ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var MyOption = React.createClass({  //define MyOption component
//   renderTheList: function() {
//     var result = [];
//     for (var i = 0; i < this.props.valList.length; i++) {
//       var innerHtml = this.props.valList[i];
//       result.push(<li key={i}>{innerHtml}</li>);
//     }
//     return result;
//   },
//   render: function(){
//     // return <option>{this.props.value}</option>; //react div element, via JSX
//     return (
//       <ul> { this.renderTheList() } </ul>
//     )
//   }
// });
//
// var MySelect = React.createClass({
//   render: function(){
//     var mySelectStyle = {
//       border: '1px solid #999',
//       display: 'inline-block',
//       padding: '5px',
//       color: 'red'
//     };
//     var valList1 = ['volvo', 'saab', 'mercedes', 'audi'];
//     var valList2 = ['chevrolet', 'toyota', 'subaru', 'honda'];
//     return ( //react div element, via JSX, containing <MyOption> component
//       <div style={mySelectStyle}>
//         <MyOption valList={valList1}></MyOption>
//         <MyOption valList={valList2}></MyOption>
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <MySelect/>,
//   document.getElementById('react-app')
// );





/**** Part 6 - State and Events ***/
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
	getInitialState: function() {
		return {
			counter: 0,
      name: 'liza'
		};
	},
	increment: function(event) {
		this.setState({
			counter: this.state.counter += 1
		});
	},
	decrement: function(event) {
    // console.log(event);
    console.log(event.nativeEvent);
		this.setState({
			counter: this.state.counter -= 1
		});
	},
	render: function() {
		console.log(this.state);
		return (
			<div className="App">
				<button onClick={this.decrement}>-</button>
				<h1>{this.state.counter}</h1>
				<button onClick={this.increment}>+</button>
			</div>
		);
	}
});

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);




/**** Part 7 - Component Lifecycle ***/
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var App = React.createClass({
//   getInitialState: function() { // 1
//     console.log('getInitialState');
//     return {};
//   },
//
//   componentWillMount: function() { // 2
//     console.log('componentWillMount')
//   },
//
//   componentWillUnmount: function() {
//     console.log('componentWillUnmount')
//   },
//
//   componentWillReceiveProps: function(nextProps) {
//     console.log('componentWillReceiveProps')
//   },
//
//   shouldComponentUpdate: function() {
//     console.log('shouldComponentUpdate');
//     return true;
//   },
//
//   componentWillUpdate: function() {
//     console.log('componentWillUpdate')
//   },
//
//   componentDidUpdate: function() {
//     console.log('componentDidUpdate')
//   },
//
//   render: function() {
//     console.log('render');
//     return <p>Hello</p>;
//   }
// });
//
// ReactDOM.render(
//   <App myprop={9} />,
//   document.getElementById('react-app')
// );





/*** MORE LESSONS ***/
// Part 8 - Passing callbacks to children from parents through props
// Part 9 - API Call in a component
