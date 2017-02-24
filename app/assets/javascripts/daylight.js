
function daylight(boxNumber, textBox){
  if (boxNumber === 1){
    textBox.style["background-color"] ='yellow';

  } else if (boxNumber === 2){
    textBox.style["background-color"] = "orange";
  } else if (boxNumber === 3){
    textBox.style["background-color"] = "black";
  }
  else{
    console.log("Nothing")
  }
}
