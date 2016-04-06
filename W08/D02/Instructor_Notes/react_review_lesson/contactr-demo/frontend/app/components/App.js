import React from 'react';
import axios from 'axios'; // last
import Title from './Title';
import FormComponent from './FormComponent';
import ListComponent from './ListComponent';


const App = React.createClass({
  getInitialState: function() {
    return {
      ajaxReturn: []
    };
  },

  getAllContactsFxn: function() {
    console.log("get all contacts");

    // Last: AJAX to DB
    axios.get('http://localhost:3000/contacts')
    .then(function(response){
      console.log("Response.data:", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this))
    .catch(function(err){
      console.warn('Error');
      return err;
    })
  },

  /* FIRST */
  render: function(){
    return(
      <div className="main-container">
        <Title/>
        <FormComponent ajaxFxn={this.getAllContactsFxn}/>
        <ListComponent contacts={this.state.ajaxReturn}/>
      </div>
    )
  }
});

export default App;
