const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Who won the championship 2016?',
        choice1: 'spurs ',
        choice2: 'cavs',
        choice3: 'pistons',
        choice4: 'lakers',
        answer: 2,
    },
    {
        question:
            "Who is the logo of the Nba?",
        choice1: "Micheal Jordan",
        choice2: "Kobe Bryant",
        choice3: "Jerry West",
        choice4: "Lebron James",
        answer: 3,
    },
    {
        question: "What year was Lebron James drafted in?",
        choice1: "2001",
        choice2: "1999",
        choice3: "2004",
        choice4: "2003",
        answer: 4,
    },
    {
        question: "What team did Tim Duncan play his whole career for?",
        choice1: "San Antionio Spurs",
        choice2: "Los Angles Lakers",
        choice3: "Memphis Grizzles",
        choice4: "Toronto Raptors",
        answer: 1,
    },

   {
        question: "	What team did Kristaps Porzingnz get drafted by?",
        choice1: "Dallas Maverkicks",
        choice2: "New York Knicks",
        choice3: "Los Angles Lakers",
        choice4: "Okalohma City Thunder",
        answer: 2,
    },
   {
        question: "What team did Anthony Davis play for being traded to Los Angles Lakers?",
        choice1: "New Orleanes Hornets",
        choice2: "Houston Rockets",
        choice3: "New Orleanes Pelicans",
        choice4: "Sacremento Kings",
        answer: 3,
    },
   {
        question: "How many championships did Lebron win with Miami Heat?",
        choice1: "3",
        choice2: "1",
        choice3: "4",
        choice4: "2",
        answer: 4,
    },
   {
        question: "Who was the first person to average a Triple-double in the regular season?",
        choice1: "Russell Westbrook",
        choice2: "James Harden",
        choice3: "Oscar Robertson",
        choice4: "Luka Doncic",
        answer: 3,
    },
   {
        question: "What was the 1992 olympic basketball team called?",
        choice1: "The Americans",
        choice2: "The dream team",
        choice3: "Showtime",
        choice4: "Lob City",
        answer: 2,
    },

   {
        question: "Which of these option was nickname given to Kobe Bryant",
        choice1: "Black Mamba",
        choice2: "Red Mamba",
        choice3: "Air Bryant",
        choice4: "All of the above",
        answer: 1,
    },

]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 20

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/Last.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()