function startGame(id){
  document.getElementById("myStartScreen").style.visibility= "hidden" ;

  switch(id) {
    case 1:
        document.getElementById("myPacmanGame").style.visibility= "visible" ;
        setNoParts(4);
        break;
    case 2:
        document.getElementById("myMemoryGame").style.visibility= "visible" ;
        newBoard();
        break;
    case 3:
        document.getElementById("myPacmanGame").style.visibility= "visible" ;
        setNoParts(1);
        break;
    default:
        console.log("game.js/startGame(id): Page ID is not supported");
  }
}
