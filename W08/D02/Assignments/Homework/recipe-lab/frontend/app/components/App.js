import React from 'react';
import Title from './Title';
import SelectA from './SelectA';
import ListAll from './ListAll';
import SecondOption from './SecondOption';

const App = React.createClass({
  getInitialState: function() {
    return {
      radioOption: ''
    };
  },
  getRadioValue: function() {
    this.setState({
      radioOption: document.querySelector('.radios:checked').value
    });
  },
  render: function() {
    return (
      <div className="main-container">
        <Title />
        <SelectA radioFxn={this.getRadioValue} />
        <SecondOption divOption={this.state.radioOption} />
      </div>
    )
  }
});

export default App;
