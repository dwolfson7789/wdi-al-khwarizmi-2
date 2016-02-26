var nums = [1, 2, 3];

function max(anArray){
  var biggest = null;
  for(var i = 0; i <= anArray.length; i++){
    if(biggest === null){
      biggest = anArray[i];
    } else if( biggest < anArray[i]){
      biggest = anArray[i];
    }
  }
  return biggest;
}

console.log(max(nums))
