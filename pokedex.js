


let SectionElm = document.createElement("section") 
// always put outside the fetch function
SectionElm.classlist = "pokedex_main"



let fetchPokemon = () => {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
      
  console.log(data);

  SectionElm.innerHTML = data.results.map(pokemon => 
    //when taking from url api link, use result after data and before map
 ` 
 <div class="pokemon_box">
 <p id="${pokemon.id}">${pokemon.name}</p>
  <p>#${pokemon.id}</p>
<img src="${pokemon.image}" alt="poke">
</div>
`

).join("");  
console.log(SectionElm);
        })//data end

        document.querySelector("main").append(SectionElm);

};//fecthpokemon end

fetchPokemon();



/* const pokeman = {
    name: data.name,
    id: data.id,
    image: data.sprites['front_default']
} */