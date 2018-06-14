

//const quizContainer = document.getElementById('quiz');
//const quizContainer=$("div#quiz");
//const resultsContainer = $("div#results");
//const submitButton = $("#submit");
$(document).ready(function(){
 //quizB = $("#quiz").append("<p>this sucks</p>");
  const quizContainer=$("div#quiz");
 // const resultsContainer = $("div#results");
  //const submitButton = $("#submit");
  // submitButton.on("click",showResults);
  
  count=0;
  timeCounter=10;
  //timer=10;

const myQuestions = [
    {
      question: "You have been bitten by a snake. Which of these should you do?",
      answers: {
        a: "Suck venom",
        b: "Shoot tiquilla",
        c: "Run in cirlces",
        d: "Stand on your head",
        e: "Yell for help!"
      },
      correctAnswer: "Suck venom"
    },
    {
      question: "Survive a bear attack by?",
      answers: {
        a: "Spitting",
        b: "Acting like a fish",
        c: "Lying down",
        d: "Throwing food",
        e: "Using bear spray"
      },
      correctAnswer: "Using bear spray"
    },
    {
        question: "Survive hypothermia by?",
        answers: {
          a: "Running in circles",
          b: "Drinking milk",
          c: "Wrap yourself in bubble wrap",
          d: "Eating a pop tart",
          e: "Growing fur"
        },
        correctAnswer: "Wrap yourself in bubble wrap"
      },
      {
        question: "When leaving for an adventure?",
        answers: {
          a: "Tell three people",
          b: "Unplug the toaster",
          c: "Eat some ice-cream",
          d: "Change your oil",
          e: "Pack a lunch"
        },
        correctAnswer: "Tell three people"
      },
    {
      question: "How long can you live without food?",
      answers: {
        a: "One day",
        b: "One minute",
        c: "What? Are you kidding me?",
        d: "Thirty days",
        e: "Twenty five days"
      },
      correctAnswer: "Thirty days"
    }
  ];
///////////////
// var vi = setVariableInterval(function() {
//   // this is the variableInterval - so we can change/get the interval here:
//   var interval = this.interval;

//   // print it for the hell of it
//   console.log(interval);

//   // we can stop ourselves.
//   if (interval>4000) this.stop();

//   // we could return a new interval after doing something
//   return interval + 100;
// }, 100);  

// // we can change the interval down here too
// setTimeout(function() {
//   vi.interval = 3500;
// }, 1000);

// // or tell it to start back up in a minute
// setTimeout(function() {
//   vi.interval = 100;
//   vi.start();
// }, 60000);
//////////////
function updateTimerCounter() {
  $("#time").text(--timeCounter);
  if(timeCounter===0){
    stopTheMadness();
  }

}
function startQuestionTimers(){
  timeCounter = 10;
  //$( "#status" ).text( "Time Remaining:" );
  
  timerInterval = setInterval(updateTimerCounter,1000);
}

$(document).on("click", "#quiz", function(e){
  e.preventDefault();
  //console.log(myQuestions[count-1].correctAnswer);///Correct Answer.
  //console.log(e.target.value);//The value of each button.
  //if(myQuestions[count-1].correctAnswer==e.target.value){
    if(myQuestions[count].correctAnswer==e.target.value){
    //countAnswerClick++;
    //changeTime=1;
    //resetTime=10000;
    //count++;
    //countAnswerClick=countAnswerClick%2==0;
    //alert(countAnswerClick++);
      alert("You survived");
      //window.clearInterval(intervalID);
      //timer=10;
      
      stopTheMadness();
      loadButtons();
  }
  else{
    countAnswerClick++;
    //count++;
      alert("I am sorry to inform you \n but you didn't make it.");
      //window.clearInterval(intervalID);
      //timer=10;
      
      stopTheMadness();
      loadButtons();
  }
  // console.log(this.attr('value'));
});
// var element = document.querySelector('.myAnswers.0');
// element.addEventListener("click", function(e) {
//     alert('something');
// }, false);
function loadButtons(){/////////makes buttons //////////
  startQuestionTimers();
 intervalID = setInterval(function () {
  //alert(count)

  //--timer;
  //alert(timer);
  //$("#time").text(timer);
      quizContainer.html(
        `<p class="myQuestion">${myQuestions[count].question}</p>
        <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.a}" class="myAnswers ${count}">${myQuestions[count].answers.a}</button>
        <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.b}" class="myAnswers ${count}">${myQuestions[count].answers.b}</button>
        <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.c}" class="myAnswers ${count}">${myQuestions[count].answers.c}</button>
        <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.d}" class="myAnswers ${count}">${myQuestions[count].answers.d}</button>
        <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.e}" class="myAnswers ${count}">${myQuestions[count].answers.e}</button>`);
 if (++count === myQuestions.length) {
     window.clearInterval(intervalID);
 }

}, 10000);
}
function stopTheMadness(){
  startQuestionTimers();
  count++
  window.clearInterval(intervalID);
  clearInterval(timerInterval);
  quizContainer.html(
    `<p class="myQuestion">${myQuestions[count].question}</p>
    <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.a}" class="myAnswers ${count}">${myQuestions[count].answers.a}</button>
    <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.b}" class="myAnswers ${count}">${myQuestions[count].answers.b}</button>
    <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.c}" class="myAnswers ${count}">${myQuestions[count].answers.c}</button>
    <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.d}" class="myAnswers ${count}">${myQuestions[count].answers.d}</button>
    <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.e}" class="myAnswers ${count}">${myQuestions[count].answers.e}</button>`);
}
 $("#start-correctOrWrong").on("click", function(){
  //--timer;
  //$("#time").text(timer);
  // $(".myAnswers."+count).on("click", function(){
  //   alert("farts");
  // });
        quizContainer.html(
          `<p class="myQuestion">${myQuestions[0].question}</p>
          <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[0].answers.a}" class="myAnswers 0">${myQuestions[0].answers.a}</button>
          <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[0].answers.b}" class="myAnswers 0">${myQuestions[0].answers.b}</button>
          <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[0].answers.c}" class="myAnswers 0"">${myQuestions[0].answers.c}</button>
          <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[0].answers.d}" class="myAnswers 0"">${myQuestions[0].answers.d}</button>
          <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[0].answers.e}" class="myAnswers 0"">${myQuestions[0].answers.e}</button>`);
  // var intervalID = setInterval(function () {
    loadButtons();
 });


});
