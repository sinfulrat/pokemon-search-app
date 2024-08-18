console.log("test")
const pokemonData = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
//to get the specific pokemon data use +{name-or-id}
//use name-f or name-m for female or male
let pokemonInput;

document.addEventListener('DOMContentLoaded', function() { //ths is so the script runs before the elemtns
    const searchInput = document.getElementById("search-input")
    const searchButton = document.getElementById("search-button")
    searchButton.addEventListener("click", () => {
      pokemonInput = searchInput.value;
      pokemonInput = pokemonInput.toLowerCase();
      console.log(pokemonInput);
      document.getElementById('types').innerHTML = '';

    fetch(pokemonData+pokemonInput) //run this code after getting pokemonInput value 
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        displayPokemon(data)
    }) //populate the divs here by calling a function
    .catch((err) =>  console.error("not a pokemon"))
    });


    const displayPokemon = (pokemon) => {
      const { id, name, weight, height, sprites, stats } = pokemon;
      const [{ base_stat: hp }, { base_stat: attack }, { base_stat: defense }, { base_stat: specialAttack }, { base_stat: specialDefense }, { base_stat: speed }] = stats;
      const types = pokemon.types.map(type => type.type.name);

      console.log(sprites.front_default)
      if (document.getElementById("sprite") != null) {
        document.getElementById("sprite").remove()
        console.log("cleared img")
      }else{
        console.log("there is no element img")
      }
      const spriteElement = document.createElement('img');
      spriteElement.id = 'sprite';
      spriteElement.src = sprites.front_default; 
      document.body.appendChild(spriteElement); 
      document.getElementById("pokemon-id").innerHTML = `pokemon id: ${id}`
      console.log(name); // Pikachu
      document.getElementById("pokemon-name").innerHTML = `pokemon name: ${name}`
      console.log(weight); // 60
      document.getElementById("weight").innerHTML = `weight: ${weight}`
      console.log(height); // 
      document.getElementById("height").innerHTML = `height: ${height}`
      console.log(hp); // 35
      document.getElementById("hp").innerHTML = `hp: ${hp}`
      console.log(attack); // 55
      document.getElementById("attack").innerHTML = `attack: ${attack}`
      console.log(defense); // 40
      document.getElementById("defense").innerHTML = `defense: ${defense}`
      console.log(specialAttack); // 50
      document.getElementById("special-attack").innerHTML = `special attack: ${specialAttack}`
      console.log(specialDefense); // 50
      document.getElementById("special-defense").innerHTML = `special defense: ${specialDefense}`
      console.log(speed); // 90
      document.getElementById("speed").innerHTML = `speed: ${speed}`
      console.log(types)
      document.getElementById('types').innerHTML = `types: ${types.join(' ')}`;
  }
  });
