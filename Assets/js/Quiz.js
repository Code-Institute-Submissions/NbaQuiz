let questions= document.querySelector('#question');
let answers= Array.from(document.querySelectorAll('.answer-text'));
let Progresstext= document.querySelector('#progress-text');
let score=document.querySelector('#score');
let progressbarfull= querySelector('#Progress_bar_full');

let currentQuestion= {}
let acceptinganswers= true
let points = 0 
let questioncounter= 0
let avalaiblequestions= []

let questions = [

{
    question : "Who is the logo of the Nba?",
    answer1: "Micheal Jordan",
    answer2: "Jerry West",
    answer3: "Magic Johnson",
    answer4:"Lebron James",
    Right_answer: 2,

},

{
  question : "How many championships does micheal Jordan have?",
    answer1: '2',
    answer2: '8',
    answer3: '4',
    answer4:'6' ,
    Right_answer: 4,

},

{
  question :"What year was Lebron James drafted in?",
    answer1: '2003',
    answer2: '2001',
    answer3: '1999',
    answer4:'2007',
    Right_answer: 1,

},
{
    question : "Which team did Tim Duncan play his whole career for?",
    answer1: "San antionio Spurs",
    answer2: "Orlando Magic",
    answer3: "Miami Heat",
    answer4:"Dallas Mavericks",
    Right_answer: 1,

},
{
question:"Who was the first person to average a Triple-double in the regular season?",
answer1: "Wilt Chamberlin",
answer2: "Oscar Robertson",
answer3:"Russel Westbrook",
answer4: "Luka Doncic",
Right_answer: 2,
}
]
let Score_Points= 1
let Max_Questions=3

startQuiz= () => {
    questioncounter= 0
    points= 0
  avalaiblequestions=[...questions]
  getNewQuestion()
}

getNewQuestion = () => {
    if(availablequestions.length === 0 || questionCounter > Max_Questions) {
        localStorage.setItem('RecentScore', points)

        return window.location.assign('Last.html')
    }

questioncounter++
 progressText.innerText = `Question ${questionCounter} of ${Max_Questions}`

 let questionIndex= Math.floor(Math.random() * avalaiblequestions.length)
 currentQuestion= avalaiblequestions[questionIndex]
 question.innerText = currentQuestion.question

 answers.forEach(answer=> {
     let number= answer.dataset['number']
     answer.innerText = currentQuestion.question
 })
 avalaiblequestions.splice(questionIndex,1)
 acceptinganswers=true

}

answers.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptinganswers) return
        
        acceptinganswers=false
        let selectedanswer= e.target
        let selectedRight_Answer= selectedanswer.dataset['number']
       
        let apply = selectedRight_Answer == currentQuestion.Right_answer ? 'correct' : 'incorrect'

    if(apply === 'correct') {
            incrementpoints(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(apply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(apply)
            getNewQuestion()
        },1000)
    })
    
})
incerementpoints=num => {
    points += num
    pointsText.innerText = score
}

startQuiz()