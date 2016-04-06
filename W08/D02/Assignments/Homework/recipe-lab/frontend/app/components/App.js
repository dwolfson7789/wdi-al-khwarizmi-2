import React from 'react';
import axios from 'axios'; // last
import Title from './Title';
import TweetsComponent from './TweetsComponent';


  const App = React.createClass({
    getInitialState: function() {
      return {
        ajaxReturn: []
      };
    },

    getAllTweetsFxn: function() {
      console.log("get all contacts");

      // Last: AJAX to DB
      axios.get('http://localhost:3000/tweets')
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
          <TweetsComponent ajaxFxn={this.getAllTweetsFxn}/>

        </div>
      )
    }
  });

  export default App;

// getAllTweetsFxn: function() {
//   console.log("get all tweets");
//
//
//   axios.get('http://localhost:3000/tweets')
//   .then(function(response){
//     console.log("Response.data:", response.data);
//     this.setState({
//       ajaxReturn: response.data
//     });
//   }.bind(this))
//   .catch(function(err){
//     console.warn('Error');
//     return err;
//   })
// },
//
// render: function(){
//   return(
//     <div className="container">
//       <Title/>
// <TweetsComponent ajaxFxn={this.getAllTweetsFxn}/>
//     </div>
//   )
//   }
// });
// export default App;
