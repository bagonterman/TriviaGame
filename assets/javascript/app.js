

//const quizContainer = document.getElementById('quiz');
//const quizContainer=$("div#quiz");
//const resultsContainer = $("div#results");
//const submitButton = $("#submit");
$(document).ready(function(){
 //quizB = $("#quiz").append("<p>this sucks</p>");
  const quizContainer=$("div#quiz");
  const startButton=$("#start-correctOrWrong");
 // const resultsContainer = $("div#results");
  //const submitButton = $("#submit");
  // submitButton.on("click",showResults);
  
  count=0;
  timeCounter=10;
  pause=4;
  correctAnswers=0;
  incorrectAnswers=0;
  $("#timeRemaining").hide();
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

function answerQuestion(myAnswer,count,myQuestions){
  --timeCounter;

quizContainer.append(`<div><p class="correctAnswer">The correct answer is ${myQuestions[count-1].correctAnswer}</p><div>`);

}
function wait(){
    timeCounter = 5;

    console.log(count);

 waitTimeout = setTimeout(answerQuestion(myAnswer,count,myQuestions),5000);
 timerInterval = setInterval(updateTimerCounter,1000);
}

function stopWait(){
  clearTimeout(waitTimeout);
}
function updateTimerCounter() {
  
  $("#time").text(--timeCounter);
  // if(count !== myQuestions.length){
  //   $("#time").text(0);
  // }
  if(timeCounter===0){
    stopTheMadness();
    //stopWait();
    //wait()
  }

}
function startQuestionTimers(){
  timeCounter = 10;
  //$( "#status" ).text( "Time Remaining:" );
  
  timerInterval = setInterval(updateTimerCounter,1000);
}

$(document).on("click", "#quiz", function(e){
  e.preventDefault();
  //clearTimeout(waitTimeout);
  try{
    myAnswer=myQuestions[count].correctAnswer==e.target.value;
    // if(myQuestions[count].correctAnswer==e.target.value){
      if(myAnswer){
      correctAnswers++;
      $("#correctAns").text(correctAnswers);
      alert("You survived \nThe correct answer was: \n"+myQuestions[count].correctAnswer);
      clearInterval(timerInterval);
      stopTheMadness();
      loadButtons();
  }
  else{
    //clearTimeout(waitTimeout);
      incorrectAnswers++;
      $("#incorrectAns").text(incorrectAnswers);
      alert("I am sorry to inform you \n but you didn't make it.\n"+"The correct answer was: \n"+myQuestions[count].correctAnswer);
      
      clearInterval(timerInterval);
      //wait();
      stopTheMadness(myAnswer);
     //wait();
      loadButtons();
      clearInterval(intervalID);
      //wait(); One of the bigger problems I have is this!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      
      }
  }
  catch(err){}
});

function loadButtons(){/////////makes buttons //////////
  startQuestionTimers();
  //wait();
  intervalID = setInterval(function () {
      quizContainer.html(
        `<p class="myQuestion">${myQuestions[count].question}</p>
        <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.a}" class="myAnswers ${count}">${myQuestions[count].answers.a}</button>
        <button type="button" style="background: url(./assets/images/b_Button.png)" value="${myQuestions[count].answers.b}" class="myAnswers ${count}">${myQuestions[count].answers.b}</button>
        <button type="button" style="background: url(./assets/images/c_Button.png)" value="${myQuestions[count].answers.c}" class="myAnswers ${count}">${myQuestions[count].answers.c}</button>
        <button type="button" style="background: url(./assets/images/d_Button.png)" value="${myQuestions[count].answers.d}" class="myAnswers ${count}">${myQuestions[count].answers.d}</button>
        <button type="button" style="background: url(./assets/images/e_Button.png)" value="${myQuestions[count].answers.e}" class="myAnswers ${count}">${myQuestions[count].answers.e}</button>`);
        //startButton.text(`<p class="myQuestion">${myQuestions[count].question}</p>`);
        //startButton.replaceWith(`<button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.a}" class="myAnswers ${count}">${myQuestions[count].answers.a}</button>`);
        if (++count === myQuestions.length) {
            window.clearInterval(intervalID);
            clearTimeout(waitTimeout);
            clearInterval(timerInterval);
            
        }

  }, 10000);
  //console.log('set intervalID', intervalID)
}
function stopTheMadness(){
  startQuestionTimers();

   count++
  //console.log('clear intervalID', intervalID)
  window.clearInterval(intervalID);
  clearInterval(timerInterval);
  //if(count>1){count=count-1}
  //startWaitTimers(6);
  try{
  quizContainer.html(
    `<p class="myQuestion">${myQuestions[count].question}</p>
    <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[count].answers.a}" class="myAnswers ${count}">${myQuestions[count].answers.a}</button>
    <button type="button" style="background: url(./assets/images/b_Button.png)" value="${myQuestions[count].answers.b}" class="myAnswers ${count}">${myQuestions[count].answers.b}</button>
    <button type="button" style="background: url(./assets/images/c_Button.png)" value="${myQuestions[count].answers.c}" class="myAnswers ${count}">${myQuestions[count].answers.c}</button>
    <button type="button" style="background: url(./assets/images/d_Button.png)" value="${myQuestions[count].answers.d}" class="myAnswers ${count}">${myQuestions[count].answers.d}</button>
    <button type="button" style="background: url(./assets/images/e_Button.png)" value="${myQuestions[count].answers.e}" class="myAnswers ${count}">${myQuestions[count].answers.e}</button>`);
  }
  catch(err){}

  }
 $("#start-correctOrWrong").on("click", function(){
    $("#timeRemaining").show();
  // $("#start-correctOrWrong").appendTo(".wrapper.characters")
        quizContainer.html(
          `<p class="myQuestion">${myQuestions[0].question}</p>
          <button type="button" style="background: url(./assets/images/a_Button.png)" value="${myQuestions[0].answers.a}" class="myAnswers 0">${myQuestions[0].answers.a}</button>
          <button type="button" style="background: url(./assets/images/b_Button.png)" value="${myQuestions[0].answers.b}" class="myAnswers 0">${myQuestions[0].answers.b}</button>
          <button type="button" style="background: url(./assets/images/c_Button.png)" value="${myQuestions[0].answers.c}" class="myAnswers 0"">${myQuestions[0].answers.c}</button>
          <button type="button" style="background: url(./assets/images/d_Button.png)" value="${myQuestions[0].answers.d}" class="myAnswers 0"">${myQuestions[0].answers.d}</button>
          <button type="button" style="background: url(./assets/images/e_Button.png)" value="${myQuestions[0].answers.e}" class="myAnswers 0"">${myQuestions[0].answers.e}</button>`);
  // var intervalID = setInterval(function () {
   
    loadButtons();
 });


});
