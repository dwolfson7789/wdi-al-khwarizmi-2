import React from 'react';

const FormComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h3 className="title-box">FormComponent</h3>
        <input
          type="radio" name="chosen-radio"
          className="recipe-radios" value="see-all"
          onChange={this.props.updateValState}
        /> See All Foods!
        <hr></hr>

        <input
          type="radio" name="chosen-radio"
          className="recipe-radios" value="add-new"
          onChange={this.props.updateValState}
        /> Add New Recipe!
        <hr></hr>

        <input
          type="radio" name="chosen-radio"
          className="recipe-radios" value="find-recipe"
          onChange={this.props.updateValState}
        /> Find Recipe!
        <hr></hr>

        <input
          type="radio" name="chosen-radio"
          className="recipe-radios" value="delete-recipe"
          onChange={this.props.updateValState}
        /> Delete Recipe
        <hr></hr>

        <input
          type="radio" name="chosen-radio"
          className="contacts-radios" value="update-recipe"
          onChange={this.props.updateValState}
        /> Update Recipe

        <hr></hr>
      </div>
    )

  }
});

export default FormComponent;

