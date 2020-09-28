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
        choice1: 'San Antinio Spurs ',
        choice2: 'Cleveland Cavaliers',
        choice3: 'Detroit Pistions',
        choice4: 'Los Angles akers',
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
        question: "What team did Anthony Davis play for before being traded to Los Angles Lakers?",
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
        choice2: "The Dream Team",
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

   {
        question: "Where did Kawhi Lenorad with his 2nd Championship ",
        choice1: "Los Angles Clippers",
        choice2: "Toronto Raptors",
        choice3: "San Antionio Spurs",
        choice4: "Indiana Pacers",
        answer: 2,
    },
     {
        question: "How many Nba organisations are located in the state of Texas?",
        choice1: "5",
        choice2: "6",
        choice3: "7",
        choice4: "3",
        answer: 4,
    },  

       {
        question: "Which player was given the nickname 'Agent Zero'?",
        choice1: "Gilbert Areans",
        choice2: "Reggie Miller",
        choice3: "Russell Westbrook",
        choice4: "Carmelo Anthony",
        answer: 1,
    },

       {
        question: "Which team sent four players to the 2015 NBA All-Star Game?",
        choice1: "Boston Celtics",
        choice2: "Miami Heat",
        choice3: "Alanta Hawks",
        choice4: "Golden State Warriors",
        answer: 3,
    },
       {
        question: "The brothers Pau and Maec Gasol come from which contry",
        choice1: "USA",
        choice2: "Spain",
        choice3: "Portugal ",
        choice4: "Uk",
        answer: 2,
    },
      {
        question: "Which country was Kyrie Irving born in?",
        choice1: "USA",
        choice2: "Canada",
        choice3: "Australia",
        choice4: "UK",
        answer: 3,
    }, 

     {      
         question: "Which player has the most championship rings",
        choice1: "Bill Russell",
        choice2: " Wilt Chamberlain",
        choice3: "Robert Horry ",
        choice4: "Kobe Bryant",
        answer: 1,
    },
  {      
         question: "Who is the tallest player recorded in the NBA ",
        choice1: "Bol Bol",
        choice2: "Dikembe Mutomboo",
        choice3: "Gheorghe Muresan",
        choice4: "Kareem Abdul-Jabbar",
        answer: 3,
    },
  {      
         question: "Who has recorded the most rebounds in their career? ",
        choice1: "Manute Bol",
        choice2: "DeAndre Jordan",
        choice3: " Wilt Chamberlain",
        choice4: "James Hardern",
        answer: 3,
    },

{      
         question: "Who has recorded the most career assists? ",
        choice1: "Steve Nash",
        choice2: "Larry Bird",
        choice3: " John Stockton",
        choice4: "Magic Johnson",
        answer: 3,
    },
{      
         question: "Who has scored the most point in one singular season?",
        choice1: "Blake Griffin",
        choice2: "James Harden",
        choice3: " Allen Iverson",
        choice4: "Devin Booker",
        answer: 2,
    },
    {      
         question: "How many teams qualify through to the playoffs?",
        choice1: "8",
        choice2: "4",
        choice3: " 24",
        choice4: "16",
        answer: 4,
    },
        {      
         question: "How many confrences are in the NBA?",
        choice1: "2",
        choice2: "4",
        choice3: "8",
        choice4: "6",
        answer: 1,
    },

       {      
         question: "Who was drafted the number 1 rookie of the NBA draft in 2019?",
        choice1: "Ja Morant",
        choice2: "Brandon Clarke",
        choice3: "Zion Willamson",
        choice4: "Lamelo Ball",
        answer: 3,
    },
       {      
         question: "How many teams exist in the current NBA?",
        choice1: "16",
        choice2: "40",
        choice3: "30",
        choice4: "24",
        answer: 3,
    },
       {      
         question: "How many teams share the arena Staples arena?",
        choice1: "2",
        choice2: "3",
        choice3: "5",
        choice4: "4",
        answer: 1,
    },


       {      
         question: "Who has scored the most consecutive 20+ points in a row?",
        choice1: "James Hardern",
        choice2: "Kevin Durant",
        choice3: "Allen Iverson",
        choice4: "Kobe Bryant",
        answer: 2,
    },
        
    {
        question: "Who has scored the most 3 point shots in a season?",
        choice1: "James Hardern",
        choice2: "Kevin Durant",
        choice3: "Stephen Curry",
        choice4: "Klay Thompson",
        answer: 2,
    },
   {
        question: "Which team has shot the most three points in a season?",
        choice1: "Houston Rockets",
        choice2: "Dallas Mavericks",
        choice3: "Milwaukee Bucks",
        choice4: "Minnesota Timberwolves",
        answer: 1,
    },
   {
        question: "Who has scored most points in a quarter?",
        choice1: "Damain Lillard",
        choice2: "Russell Westbrook",
        choice3: "Luka Doncic",
        choice4: "Klay Thompson",
        answer: 4,
    },
   {
        question: "What was the most points scored in a game, which  was done by WIlt chamberlin?",
        choice1: "79",
        choice2: "85",
        choice3: "100",
        choice4: "55",
        answer: 3,
    },
   {
        question: "The famous game of Kobe vs Toronto how many points did he score",
        choice1: "81",
        choice2: "92",
        choice3: "48",
        choice4: "61",
        answer: 1,
    },

     {
        question: "What is the career high of Devin Booker?",
        choice1: "60",
        choice2: "70",
        choice3: "23",
        choice4: "50",
        answer: 2,
    },

     {
        question: "What was the number Lebron James held at Miami Heat?",
        choice1: "23",
        choice2: "32",
        choice3: "3",
        choice4: "6",
        answer: 4,
    },
        
     {
        question: "In what year did Dwayne Wade win his first championship?",
        choice1: "2010",
        choice2: "2011",
        choice3: "2005",
        choice4: "2006",
        answer: 4,
    },

     {
        question: "How many championships did the combanation of Shaq and kobe win when playing for the Lakers?",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "1",
        answer: 2,
    },
   {
        question: "Who drafted Tracy McGrady?",
        choice1: "Toronto Raptors",
        choice2: "Orlando Magic",
        choice3: "San Antonio Spurs",
        choice4: "Houston Rockets",
        answer: 1,
    },
   {
        question: "The 2015 championship was won by which team?",
        choice1: "Toronto Raptors",
        choice2: "Miami Heat",
        choice3: "San Antonio Spurs",
        choice4: "Golden State Warriors",
        answer: 4,
    },
   {
        question: "Which duo was called the Splash brothers?",
        choice1: "Kyle Lowry & Demar DeRozan",
        choice2: "Micheal Jordan & Scottie Pippen",
        choice3: "Stephen Curry & Klay Thompson",
        choice4: "Damian Lillard & CJ McCollum",
        answer: 3,
    },

       {
        question: "What is the most points has team has conceded in a game of 184 points?",
        choice1: "Los Angles Lakers",
        choice2: "Detroit Pistions",
        choice3: "Portland Trail Blazers",
        choice4: "Chicago Bulls",
        answer: 2,
    },


       {
        question: "How long has the NBA existed for?",
        choice1: "60 years",
        choice2: "74 years",
        choice3: "80 years",
        choice4: "70 years",
        answer: 2,
    },

       {
        question: "Who has recorded the most points in their NBA career?",
        choice1: "Kobe Bryant",
        choice2: "Kareem Abdul-Jabbar",
        choice3: "Karl Malone",
        choice4: "leBron James",
        answer: 2,
    },
    {
     
        question: "Where Kevin Garnett win his championship?",
        choice1: "Brooklyn Nets",
        choice2: "Boston Celtics",
        choice3: "Minesota Timberwolves",
        choice4: "Washington Wizards",
        answer: 2,

    },
  {
     
        question: "Who is the shortest player recorded in the NBA?",
        choice1: "Muggsy Bogues",
        choice2: "Earl Boykins",
        choice3: "Spud Webb",
        choice4: "Greg Grant",
        answer: 1,

    },

      {
     
        question: "Who won the regular season MVP in the year 1993?",
        choice1: "Charles Barkley",
        choice2: "Micheal Jordan",
        choice3: "Kevin Johnson",
        choice4: "Karl Malone",
        answer: 2,

    },

      {
     
        question: "Where Kevin Garnett win his championship?",
        choice1: "Brooklyn Nets",
        choice2: "Boston Celtics",
        choice3: "Minesota Timberwolves",
        choice4: "Washington Wizards",
        answer: 2,

    },

        {
     
        question: "In which year was  Nikloa Jokic was drafed in?",
        choice1: "2017",
        choice2: "2014",
        choice3: "2012",
        choice4: "2018",
        answer: 2,

    },


           {
     
        question: "Which year did Dirk Nowitzki win his only championship?",
        choice1: "2010",
        choice2: "2008",
        choice3: "2011",
        choice4: "2015",
        answer: 3,

    },


           {
     
        question: "Which was the furthuest Tracy Mcgrady ever made  in the playoffs?",
        choice1: "First Round",
        choice2: "Confroence FInals ",
        choice3: "NBA Finals",
        choice4: "Second Round",
        answer: 1,

    },

           {
     
        question: "How tall was Yao Ming?",
        choice1: "7 ft 4 ",
        choice2: "6 ft 11",
        choice3: "7 ft 9",
        choice4: "7 ft 6 ",
        answer: 4,

    },

    
           {
     
        question: "How long is NBA game?",
        choice1: "90 Minutes",
        choice2: "35 Minutes",
        choice3: "48 Minutes",
        choice4: "50 Minutes",
        answer: 3,

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
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('Last.html')
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

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'selected'

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