window.onload = function() {
  console.log('loaded');

  // event listener on submit button:
  document.getElementById('submit-button').addEventListener('click', function() {

    // get val of fave color checkboxes:
    var colorCheckedValue = document.querySelectorAll('.fave-color:checked');
    var vals = [];
    for (var i = 0; i < colorCheckedValue.length; i++) {
      vals.push(colorCheckedValue[i].value);
      // console.log(colorCheckedValue[i].value);
    }
    // console.log("vals array: " , vals);

    // get val of fave color radios:
    var colorRadios = document.querySelector('.fave-color-radios:checked');
    console.log(colorRadios.value);
    // var radioColorVal = colorRadios[0].value;
    // console.log(radioColorVal);

    // get val of dropdown:
    var carDropdown = document.getElementById('car-dropdown').value;
    // console.log(carDropdown);
  });

};
