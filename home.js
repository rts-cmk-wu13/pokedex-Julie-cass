


let sectionElm = document.createElement("section")
sectionElm.classList = "home_title"

sectionElm.innerHTML =
`
    <h1><i class="fa-solid fa-bullseye"></i>Pokèdex</h1>
<div>
    <i class="fa-solid fa-magnifying-glass"></i>
    <input placeholder="search" type="search" id="searchBar" name="searchBar">
        <button>#</button>
</div>
`

document.querySelector("header").append(sectionElm)