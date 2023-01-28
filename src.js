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
        d : "both class and tag",
        answer : "c"
    },

    {
        question : "Which of the following has introduced text, list, box, margin, border, color, and background properties? ",
        a :  "HTML",
        b :  "PHP",
        c : "CSS",
        d : "Ajax",
        answer : "c"
    },

    {
        question : "Which of the following CSS framework is used to create a responsive design?",
        a :  "django",
        b :  "rails",
        c : "larawell",
        d : "bootstrap",
        answer : "d"
    },

    // {
    //     question : "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
    //     a :  "tag",
    //     b :  "id",
    //     c : "class",
    //     d : "both class and tag",
    //     answer : "b"
    // },

    // {
    //     question : "Which of the following CSS style property is used to specify an italic text? ",
    //     a :  "style",
    //     b :  "font",
    //     c : "font-style",
    //     d : "@font-face",
    //     answer : "c"
    // },

    // {
    //     question : "Which of the following function defines a linear gradient as a CSS image? ",
    //     a :  "gradient()",
    //     b :  "linear-gradient()",
    //     c : "grayscale()",
    //     d : "image()",
    //     answer : "b"
    // },
]

const quiz = document.getElementById('container')
const answers = document.querySelectorAll('.option')
const question = document.getElementById('question')
const a = document.getElementById('text_a')
const b = document.getElementById('text_b')
const c = document.getElementById('text_c')
const d = document.getElementById('text_d')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
let queNo = 0

loadQuiz()

function loadQuiz(){
    queNo++
    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    question.innerHTML = `Q.${queNo} `+ " " + currentQuizData.question
    a.innerHTML = currentQuizData.a
    b.innerHTML = currentQuizData.b
    c.innerHTML = currentQuizData.c
    d.innerHTML = currentQuizData.d

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
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz() 
        }
        else{
            quiz.innerHTML = `
            <h2 style="te">You final Score is ${score}/${quizData.length}</h2>
            <br>
            <button onclick="location.reload()">Reload</button>
            
            `
        }
    }
})