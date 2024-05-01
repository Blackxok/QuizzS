// creating an array and passing the number, questions, options, and answers
let questions_arr = [
   {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
         "Hyper Text Markup Language",
         "Hyper Text Preprocessor",
         "Hyper Text Multiple Language",
         "Hyper Tool Multi Language",
      ],
   },
   {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
         "Cascading Style Sheet",
         "Common Style Sheet",
         "Colorful Style Sheet",
         "Computer Style Sheet",
      ],
   },
   {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
         "Hypertext Preprocessor",
         "Hypertext Programming",
         "Hypertext Preprogramming",
         "Hometext Preprocessor",
      ],
   },
   {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
         "Structured Query Language",
         "Stylish Question Language",
         "Stylesheet Query Language",
         "Statement Question Language",
      ],
   },
   {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
         "eXtensible Markup Language",
         "eXecutable Multiple Language",
         "eXTra Multi-Program Language",
         "eXamine Multiple Language",
      ],
   },
];

// SHUFFELD QUESTIONS
function shuffleArray(arr) {
   for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
   }
   return arr;
}

// Shuffle the array of questions
const questions = shuffleArray(questions_arr);
