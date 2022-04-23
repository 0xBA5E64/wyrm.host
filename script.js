

let canvas = document.getElementById("logoBox");
let canvasSize = {x:40,y:10}


let imageWyrmLogo = [
  [0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0],
  [0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0],
  [0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0],
  [0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0],
  [0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0],
  [0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0]
]

let imageDrgnLogo = [
  [0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0]
]


function init() {
  for(let i = 0; i < canvasSize.y; i++) {
    let pixelRowElement = document.createElement("div");
    pixelRowElement.classList.add("row")
    canvas.appendChild(pixelRowElement)

    for(let i2 = 0; i2 < canvasSize.x; i2++) {
      let pixelElement = document.createElement("div");
      pixelElement.classList.add("pixel")
      pixelElement.appendChild(document.createElement("span"));
      pixelElement.children[0].innerText = "+";
      pixelRowElement.appendChild(pixelElement)
    }
  }
  document.getElementById("logoBox").style.width = (canvasSize.x * 16) + "px";
}

init()


function renderImage(image) {

  for(let i = 0; i < image.length; i++) {
    for(let i2 = 0; i2 < image[i].length; i2++) {
      if(image[i][i2]) {
        canvas.getElementsByClassName("row")[i].children[i2].classList.add("active");
      } else {
        canvas.getElementsByClassName("row")[i].children[i2].classList.remove("active");
      }
    }
  }
}

let renderImageMem = {x:0,y:0}

function renderImageSlow(image) {
  
  //console.log("Now serving pixel X: " + renderImageMem.x + " Y: " + renderImageMem.y)

  if(renderImageMem.y == image.length) {
    return true;
  }
  
  if(image[renderImageMem.y][renderImageMem.x]) {
    canvas.getElementsByClassName("row")[renderImageMem.y].children[renderImageMem.x].classList.add("active");
  }
  

  renderImageMem.x++

  if(renderImageMem.x >= image[0].length) {
    renderImageMem.x = 0
    renderImageMem.y++
  }

  setTimeout(function(){renderImageSlow(image)}, 10)
}

renderImageSlow(imageWyrmLogo);


// document.getElementById("linkBox").children[2].addEventListener("mouseenter", function(){renderImage(imageDrgnLogo)})