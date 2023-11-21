
var mc = document.body.querySelectorAll('.card');
var go= document.querySelector('#go');

let id = 0;
var boot = false;

document.addEventListener("keydown", function(event) {
 
    switch (event.key) {
        case "Enter":
            AndroidInterface.receiveStringFromJS(String(id));
        break;
      case "ArrowUp":
        handleArrowPress('up');
        break;
      case "ArrowDown":
        handleArrowPress('down');
        break;
      case "ArrowLeft":
        handleArrowPress('left');
        break;
      case "ArrowRight":
        handleArrowPress('right');
        break;
      default:
        break;
    }
  }
);

function handleArrowPress(direction) {
  if(boot){ 
    if (direction === 'up') {
      mc[id].style.border = "0px ";
      id = 5;
      go.style.backgroundColor="white";
      go.style.color="black";
    } else if (direction === 'down'){
      go.style.backgroundColor="rgba(255, 255, 255, 0.062)";
      go.style.color="white";
      id=0;
      mc[id].style.border = "2px solid white";
    }
  if(id!=5){
    if (direction === 'right' && id!==3) {
      
        mc[id].style.border = "0px ";
        id = Math.min(id + 1, 3);
        mc[id].style.border = "2px solid white";
  
      }
      
         else if (direction === 'left'&& id!==0)
        {
        
            mc[id].style.border = "0px";
        id = Math.max(id - 1, 0);
        mc[id].style.border = "2px solid white";
     
      }}}
      }