
var mc = document.body.querySelectorAll('.card');


let id = 0;


document.addEventListener("keydown", function(event) {
 
    switch (event.key) {
        case "Enter":
            Android.showToast(String(id));
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
  
    if (direction === 'up') {
    } else if (direction === 'down'){
    }
  
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
     
      }
      }