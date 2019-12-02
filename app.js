//grab container div
//insert div items into container


const gridContainer = document.querySelector(".grid-container");
console.log(gridContainer);



//loop through and add all 16X16 items
function insertDivs() {
    for (let i = 0; i < 256; i++) {
        let gridItem = document.createElement("div");   //have to create in loop so it creates new div to append multiple times
        gridItem.setAttribute("class", "grid-item");

        gridItem.addEventListener("mouseover", colorDivs);
        gridContainer.append(gridItem);
    }
}
insertDivs();

//takes in hover event
function colorDivs (e) {
    console.log(e);
    console.log(e.target); //div were hovering over
    e.target.style.background = "black";
}



//clear the current grid and send the user a popup asking for how many squares per side to make the new grid.
function reset() {
    //reset the container
    gridContainer.innerHTML = "";

    //add all functionality back
    insertDivs();
}
