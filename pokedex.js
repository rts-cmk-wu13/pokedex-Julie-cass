let SectionElm = document.createElement("section");
SectionElm.classList="pokelist";
document.querySelector("main").append(SectionElm)


    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    .then(response => response.json())

    .then(data => {

        SectionElm.innerHTML = data.map(pokemon => {
`    <p>${pokemon.name}</p>
`

})
document.querySelector("main").append(SectionElm)
})



