var poke ={
  onPokemon: function(result){
  console.log(result);
  var filteredResults = result.abilities.filter(function(obj){
    if(obj.is_hidden === true){
      return true
    } else {
      return false
    }
  })
  console.log(filteredResults);

  }
};
