var winningBox = Math.floor((Math.random()*3)+1)

function three(boxnumber){
  if (boxnumber === winningBox){
    alert("You won")
  } else if (boxnumber < winningBox){
    alert("Choose A different box")
  } else {
    console.log("Wrong")
  }
}