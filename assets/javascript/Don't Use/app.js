

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
  setTimeout( buildQuiz, 10000);
  count=0;
//console.log(quizContainer);
// console.log(resultsContainer);
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');
// var quizContainer = document.$("#quiz");
// const resultsContainer = $("#results");
//const submitButton = $("#submit");
//const quizContainer=$(document).$("#quiz");
// console.log(quizContainer);
// alert(quizContainer);



const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
        question: "Who is the strongest?",
        answers: {
          a: "Superman",
          b: "The Terminator",
          c: "Waluigi, obviously"
        },
        correctAnswer: "c"
      },
      {
        question: "Who is the strongest?",
        answers: {
          a: "Superman",
          b: "The Terminator",
          c: "Waluigi, obviously"
        },
        correctAnswer: "c"
      },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

  // unused
//little snippet that I tried to use for an on click
  // <button type="button" style="background: url(./assets/images/a_Button.png)" class="myAnswers 0" onclick="${answer()};">${myQuestions[count].answers.a}</button>

 function buildQuiz(){
    // A place to store the HTML output
    const output = [];
  
    // myQuestions is an array
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // list of answer choices
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    //console.log(quizContainer+"  "+output.join(''))
    //quizContainer.innerHTML = "farts";
    // quizContainer.innerHTML = output.join('');
    quizContainer.append(output.join(''));
    //console.log(output.join(''));

    
  }

 


  function showResults(){
   // alert(quizContainer[0].constructor.name);
    // gather answer containers from our quiz
    //const answerContainers = quizContainer.querySelectorAll('.answers');
    const answerContainers = quizContainer[0].querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer===currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
  }
});
