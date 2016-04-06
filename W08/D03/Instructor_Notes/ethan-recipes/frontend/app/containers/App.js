import React from 'react';
import Main from './Main';
import AjaxHelpers from '../utils/AjaxHelpers';
import Header from '../components/Header';

const App = React.createClass({
  getInitialState: function() {
    console.log('get initial state');
    return {
      recipes: []
    }
  },
  componentWillMount: function() {
    console.log('component will mount');
  },
  componentDidMount: function() {
    console.log('component did mount');
    // AjaxHelpers.getAllRecipes().then(function(response) {
    //   console.log(response.data);
    //   this.setState({
    //     recipes: response.data
    //   })
    // }.bind(this));

    AjaxHelpers.getAllRecipes().then((response) => {
      this.setState({
        recipes: response.data
      });
    });
  },
  render: function() {
    console.log('render');
    return (
      <div>
        <Header />
        <Main recipes={this.state.recipes}/>
      </div>
    );
  }
});

export default App;
