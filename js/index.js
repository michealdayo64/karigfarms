console.log("hello")

var breakBTN = document.getElementById('bread-click')
var menuLayer = document.getElementById("menu-id")


breakBTN.addEventListener('click', (e) =>{
    console.log(breakBTN);
    e.preventDefault()
    if(menuLayer.style.display === "block"){
        menuLayer.style.display = "none"
    }else{
        menuLayer.style.display = "block"
    }
      
})