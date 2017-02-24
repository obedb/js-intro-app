

var clickedCount = 0;
var colors = ["green", "blue", "black", "yellow"];
function jackhammer(box){
    box.style["background-color"] = colors[clickedCount];
    console.log(clickedCount);
    clickedCount++;
  }


