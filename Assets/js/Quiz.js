let questions= document.querySelector('#question');
let answers= Array.from(document.querySelectorAll('.answer-text'));
let Progresstext= document.querySelector('#progress-text');
let score= document.querySelector('#score');
let progressbarfull= querySelector('#Progress_bar_full');

let currentQuestion= {};
let acceptinganswers= true;
let score = 0; 
let questioncounter= 0;
let avalaiblequestions= [];

let questions = [];