/*
Features :

1) Here you can enter your name which gives user personalized touch at the time of result
2) Here 15 sec is the timer, you can increase and decrease the timer
3) You can increase the no. of question to ask by just changing one variable in the code, all the other thing it maanges automatically
4) You just have to add question data, code will automatically select the random question from there and will not be repeated again
   in that particular quiz which makes it very easy to expand this quiz app
5) Custom Remarks based on your performance in quiz is given at the final result time
6) Alert message if you do not select any option and click on submit button
7) If you do not answer question in that given time it will take it as a no responce and will give you score 0
8) Also shows the no of question you have answered or appeared on
9) You can also increase or decrease the time given for particular question.
*/

// Quiz data 

const quizData = [
    {
        question : " What is CSS? ",
        a :  "CSS is a style sheet language",
        b :  "CSS is designed to separate layout, colors, and fonts",
        c : "CSS is the language used to style the HTML documents",
        d : "All of the mentioned",
        answer : "d"
    },

    {
        question : "Which of the following tag is used to embed css in html page? ",
        a :  "css",
        b :  "!DOCTYPE html",
        c : "script",
        d : "style",
        answer : "d"
    },

    {
        question : "Which of the following CSS selectors are used to specify a group of elements? ",
        a :  "tag",
        b :  "id",
        c : "class",
        d : "Both class and tag",
        answer : "c"
    },

    {
        question : "Which of the following has introduced text, list, box, margin, border, color, and background properties? ",
        a :  "HTML",
        b :  "PHP",
        c : "CSS",
        d : "AJAX",
        answer : "c"
    },

    {
        question : "Which of the following CSS framework is used to create a responsive design?",
        a :  "Django",
        b :  "Rails",
        c : "Larawell",
        d : "Bootstrap",
        answer : "d"
    },

    {
        question : "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
        a :  "tag",
        b :  "id",
        c : "class",
        d : "both class and tag",
        answer : "b"
    },

    {
        question : "Which of the following CSS style property is used to specify an italic text? ",
        a :  "style",
        b :  "font",
        c : "font-style",
        d : "@font-face",
        answer : "c"
    },

    {
        question : "Which of the following function defines a linear gradient as a CSS image? ",
        a :  "gradient()",
        b :  "linear-gradient()",
        c : "grayscale()",
        d : "image()",
        answer : "b"
    },
]

// Selecting all the elements

const nameInp = document.getElementById('nameInp')
const quiz = document.getElementById('container')
const answers = document.querySelectorAll('.option')
const question = document.getElementById('question')
const a = document.getElementById('text_a')
const b = document.getElementById('text_b')
const c = document.getElementById('text_c')
const d = document.getElementById('text_d')
const submitBtn = document.getElementById('submit')
const queFooterNo = document.getElementById('footer')
const timeLine = document.getElementById('timeline')
const userName = document.getElementById('input-start').value

// declaring all variable in global scope
let counter // for time interval
let widthVal = 0 // for width of time line running on top of question
let quizLength = 5 // you can control the quiz length directly from here(You have to have the less or equal no of question in quizData)
let score = 0  // to store score
let queNo = 0 // to indicate queNo
let questionAnswered = [] // to store asked question during quiz
let remark = ["Low score! You have to practice more!","Very Good Score! Keep it up", "Amazing! You did it Topper"] // remarks
let yourRemark = remark[0] // default remark
let currentQuiz// generate the que randomly


// function to generate random quiz question which is not asked before
function randomQuizNo(){
    let quizNo =  Math.floor((Math.random() * quizData.length))
    while(questionAnswered.includes(quizNo)){
        quizNo = Math.floor((Math.random() * quizData.length))
    }
    return quizNo
}


// To load the quiz on app

function loadQuiz(){
    clearInterval(counter) // clears prev the counter
    startTimer(0) // init the counter
    
    nameInp.style.display="none"
    quiz.style.display="block"
    queNo++
    deselectAnswer() 
    currentQuiz = randomQuizNo() 
    const currentQuizData = quizData[currentQuiz]

    question.innerHTML = `Q${queNo}: `+ " " + currentQuizData.question
    a.innerHTML = currentQuizData.a
    b.innerHTML = currentQuizData.b
    c.innerHTML = currentQuizData.c
    d.innerHTML = currentQuizData.d
    queFooterNo.innerHTML = `${queNo}/${quizLength} Questions`


}

function deselectAnswer(){
    answers.forEach(answer => answer.checked = false)
}

function getSelected(){
    let answerSelected

    answers.forEach(answer => {
        if(answer.checked){
            answerSelected = answer.id  
        }
    })

    return answerSelected
}

submitBtn.addEventListener('click', ()=>{

    const answer = getSelected()
    
    if(answer){
        if(answer===quizData[currentQuiz].answer){
            score++
        }
    }
    else{
        alert("Please select one of the option first!")
    }
    checkNext()
    
})

function checkNext(){
    
    questionAnswered.push(currentQuiz)

    if(questionAnswered.length<quizLength){
        loadQuiz() 
    }
    else{
        if(score===quizLength)yourRemark = remark[2]
        else if(score>quizLength*0.5)yourRemark = remark[1]
        
        
        quiz.innerHTML = `
        <h1 style="text-align:center">Hey ${userName} !</h1>
        <h2 style="text-align:center">You final Score is ${score}/${quizLength} <br> ${yourRemark} </h2>
        <br>
        
        <button onclick="location.reload()">Reload</button>`
    }
}



function startTimer(time){
    counter = setInterval(function(){
        time+=1
        timeLine.style.width = `${time}px`
        if(time>652){
            clearInterval(counter)
            checkNext()
        }
    },23)
}




