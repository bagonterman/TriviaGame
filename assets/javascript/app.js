

//const quizContainer = document.getElementById('quiz');
//const quizContainer=$("div#quiz");
//const resultsContainer = $("div#results");
//const submitButton = $("#submit");
$(document).ready(function(){
 //quizB = $("#quiz").append("<p>this sucks</p>");
  const quizContainer=$("div#quiz");
  const resultsContainer = $("div#results");
  const submitButton = $("#submit");
  submitButton.on("click",showResults);
  
  count=0;
  timer=25;

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


 $("#start-correctOrWrong").on("click", function(){
  // $("#start-correctOrWrong").on('click', intervalID);
var intervalID = setInterval(function () {

    --timer;
    $("#time").text(timer);
        quizContainer.html(
          `<p class="myQuestion">${myQuestions[count].question}</p>
          <button type="button" style="background: url(./assets/images/a_Button.png)" class="myAnswers">${myQuestions[count].answers.a}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.b}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.c}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.d}</button>
          <button type="button" class="myAnswers">${myQuestions[count].answers.e}</button>`);
   if (++count === myQuestions.length) {
       window.clearInterval(intervalID);
   }
}, 7000);
 });

});
