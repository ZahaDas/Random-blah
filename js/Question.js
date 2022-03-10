class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("");
    this.button = createButton('Press "Enter" to submit');
    this.question = createElement('h3');
    this.answer = createElement('h3')
  }

  hide(){
    this.button.hide();

    this.answer.html("Liesha's Response: Shut up");
    this.answer.position(150, 260);

  }

  display(){
    this.title.html("Liesha 2.0");
    this.title.position(350, 0);

    this.question.html("Type anything below:" );
    this.question.position(150, 180);

    this.input1.position(150, 230);
    this.button.position(290, 300);
  }
}
