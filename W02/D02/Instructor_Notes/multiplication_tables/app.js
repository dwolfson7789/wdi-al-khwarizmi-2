console.log("Interpreting app.js...");

var multTable;

window.onload = function () {
  console.log("Window onload starting...");

  /* Create the data! */
  var MAX_VALUE = 16;
  multTable = [];
  for (var rowIndex = 0; rowIndex < MAX_VALUE; rowIndex++) {
    var nextRow = [];

    for (var colIndex = 0; colIndex < MAX_VALUE; colIndex++) {
      nextRow[colIndex] = (rowIndex + 1) * (colIndex + 1);
    }

    multTable[rowIndex] = nextRow;
  }

  /* Display the data! */
  var multTableNode = document.querySelector('table.mult tbody');

  /* Struggle with the best practice of iterating over the data,
     not your memory of how it was created */

  for (rowIndex = 0; rowIndex < multTable.length; rowIndex++) {
    var row = multTable[rowIndex];

    var tr = document.createElement('tr');
    for (colIndex = 0; colIndex < row.length; colIndex++) {
      var td = document.createElement('td');
      td.innerText = row[colIndex];
      tr.appendChild(td);
    }

    multTableNode.appendChild(tr);
  }

  console.log("Window onload terminating...");
};





// row no longer exists out here


console.log("By now, all of app.js has been interpreted...");
