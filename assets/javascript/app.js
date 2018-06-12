

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
  
  count=1;
  timer=12;

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
      correctAnswer: "a"
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
      correctAnswer: "e"
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
        correctAnswer: "c"
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
        correctAnswer: "a"
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
      correctAnswer: "d"
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
function answer(){
console.log(this);
}
// var element = document.querySelector('.myAnswers.0');
// element.addEventListener("click", function(e) {
//     alert('something');
// }, false);

 $("#start-correctOrWrong").on("click", function(){
  $("#time").text(timer);
  // $(".myAnswers."+count).on("click", function(){
  //   alert("farts");
  // });
        quizContainer.html(
          `<p class="myQuestion">${myQuestions[count].question}</p>
          <button type="button" style="background: url(./assets/images/a_Button.png)" class="myAnswers 0" onclick="${answer()}">${myQuestions[count].answers.a}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.b}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.c}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.d}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.e}</button>`);
  var intervalID = setInterval(function () {

    --timer;
    $("#time").text(timer);
        quizContainer.html(
          `<p class="myQuestion">${myQuestions[count].question}</p>
          <button type="button" style="background: url(./assets/images/a_Button.png)" class="myAnswers ${count}" onclick="answer()">${myQuestions[count].answers.a}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.b}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.c}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.d}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.e}</button>`);
   if (++count === myQuestions.length) {
       window.clearInterval(intervalID);
   }
  
}, 12000);
 });


});
