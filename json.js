
var tabla = document.getElementById('tabla')
function obtenerPokemon(nombre) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokémon no encontrado');
        }
        return response.json();
      });
}

 var hola = obtenerPokemon('Charmander')
    .then(pokemon => {
      tabla.innerHTML='<table> <tr> <td> Nombre</td> <td>'+pokemon.name+'</td></tr> <tr> <td>Altura </td> <td>'+pokemon.height+'</td></tr></table>'
      
    })
    .catch(error => {
      console.error('Error:', error.message);
});



const pokemones = [
    {
      nombre: "Bulbasaur",
      tipo: ["planta", "veneno"],
      stats: { ataque: 49, defensa: 49 }
    },
    {
      nombre: "Charmander",
      tipo: ["fuego"],
      stats: { ataque: 52, defensa: 43 }
    },
    {
      nombre: "Squirtle",
      tipo: ["agua"],
      stats: { ataque: 48, defensa: 65 }
    },
    {
      nombre: "Pikachu",
      tipo: ["eléctrico"],
      stats: { ataque: 55, defensa: 40 }
    },
    {
      nombre: "Gengar",
      tipo: ["fantasma", "veneno"],
      stats: { ataque: 65, defensa: 60 }
    }
  ];
  
  /*for (const clave in pokemon) {
    console.log(clave + ": " + JSON.stringify(pokemon[clave]));
  }*/

  var pokemonAtaque = pokemones.filter(p => p.stats.ataque > 50 && p.stats.defensa < 80);
  console.log(pokemonAtaque)

  pokemones.forEach(pokemon => {
    console.log(pokemon.nombre)
  });