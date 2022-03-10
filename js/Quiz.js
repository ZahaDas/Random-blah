class Quiz {
  constructor(){}

  start(){
    if(gameState === 0){
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide();
    background("teal");
    fill(0);
    textSize(30);
  }
}
