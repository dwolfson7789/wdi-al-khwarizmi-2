import React from 'react';
import axios from 'axios';
import ajaxHelpers from '../utils/ajaxHelpers';
import Title from '../fsc/Title';
import ResultsComponent from '../fsc/ResultsComponent';
import FormComponent from '../components/FormComponent';
import GetContacts from '../components/GetContacts';
import AddContact from '../components/AddContact';
import DeleteContact from '../components/DeleteContact';

const App = React.createClass({
  getInitialState: function() {
    return {
      ajaxReturn: [],
      radioVal: '',
      name: '',
      email: '',
      newName: '',
      newEmail: ''
    };
  },

  updateValState: function(e) {
    console.log("You've chosen:", e.target.value);
    this.setState({
      radioVal: e.target.value
    });
  },

//get all contacts//
  getContactsAjaxCall: function() {
    console.log('Get all contacts!');
    ajaxHelpers.getContacts()
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },

  addContactAjaxCall: function() {
    console.log('Add new contact:', this.state.name, this.state.email);

    const contact = {
      name: this.state.name,
      email: this.state.email
    };
    ajaxHelpers.addContact(contact)
  },
  addContactAjaxCall: function() {
    console.log('Add new contact:', this.state.name, this.state.email);

    const contact = {
      name: this.state.name,
      email: this.state.email
    };
    ajaxHelpers.addContact(contact)
  },
  addContactAjaxCall: function() {
    console.log('Add new contact:', this.state.name, this.state.email);

    const contact = {
      name: this.state.name,
      email: this.state.email
    };
    ajaxHelpers.addContact(contact)
  },

  deleteContactAjaxCall: function() {
    console.log('delete contact:', this.state.name, this.state.email);
    const contact = {
      name: this.state.name,
      email: this.state.email
    };
    ajaxHelpers.deleteContact(contact)
  },


  nameInput: function(e){
    this.setState({
      name: e.target.value
    })
  },
  emailInput: function(e){
    this.setState({
      email: e.target.value
    })
  },
  newNameInput: function(e){
    this.setState({
      newName: e.target.value
    })
  },
  newEmailInput: function(e){
    this.setState({
      newEmail: e.target.value
    })
  },

  getAppropriateFormComponent: function() {
    switch (this.state.radioVal) {
      case 'see-all':
        console.log('see-all case');
        return (
          <GetContacts onSubmit={this.getContactsAjaxCall} />
        );
        break;

      case 'add-new':
        console.log('add-new case');
        // show AddContact UI
        return (
          <AddContact
            nameInput={this.nameInput} emailInput={this.emailInput}
            onSubmit={this.addContactAjaxCall}
          />
        );

        break;

        case 'delete-contact':
          console.log('delete-contacts case');

          return (
            <DeleteContact
              nameInput={this.nameInput} emailInput={this.emailInput}
              onSubmit={this.deleteContactAjaxCall}
            />
          );
          break;

      default:
        return <p>Make a choice</p>
    }
  },

  render: function(){
    return(
      <div className="main-container">
        <Title/>
        <FormComponent
          updateValState={this.updateValState}
        />
        {this.getAppropriateFormComponent()}
        <ResultsComponent
          contacts={this.state.ajaxReturn}
        />
      </div>
    )
  }
});

export default App;
