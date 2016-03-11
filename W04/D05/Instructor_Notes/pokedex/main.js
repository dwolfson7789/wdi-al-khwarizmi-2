document.addEventListener("DOMContentLoaded", function(event){
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/1/',
    dataType: 'json',
    success: poke.onPokemon
  });
});
