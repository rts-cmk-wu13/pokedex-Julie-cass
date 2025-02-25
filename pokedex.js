let SectionElm = document.createElement("section")
sectionElm.classList="pokelist"
document.querySelector("main").append(SectionElm)
SectionElm.innerHTML =
`
<div>
<p>id</p>
<a href=""><img src="" alt="bing bong"></a>
<h4>name of pokèmon</h4>
</div>
`
document.querySelector("main").append(SectionElm)



//? link to api first 20
/* "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
 */









/* let SectionElm = document.createElement("section")
SectionElm.classList="pokelist"

document.querySelector("main").append(SectionElm)
fetch("/data/pokedex.json")
    .then(response => response.json())
    .then(data => {

        SectionElm.innerHTML = data.pokedex.map(pokemon =>
`
<div>
<p>id</p>
<a href="pokemon.html?id="${pokemon.name}"><img src="/${pokemon.image}" alt="bing bong"></a>
<h4>name of pokèmon</h4>
</div>
`
).join("")

document.querySelector("main").append(SectionElm)
    }) */ //?test for fetch



