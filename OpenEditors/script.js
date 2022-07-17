const h1 = document.querySelector("div.title:first-child h1");



function handleTitleClick() {
    h1.style.color = "white";
    document.body.style.backgroundColor = "tomato";
    let windowWidth = window.outerWidth;
    if(windowWidth > 800) {
        document.body.style.backgroundColor = "blue";
    }   if(windowWidth > 1200) {
            document.body.style.backgroundColor = "purple";
    }   if(windowWidth > 1600) {
        document.body.style.backgroundColor = "yellow";
}

}

window.addEventListener("resize", handleTitleClick);

