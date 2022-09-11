var readlineSync = require('readline-sync');

var score = 0;

var options = ['A', 'B', 'C'];

console.log('Welcome to Marvel quiz by Tushar Anekar');

var userName = readlineSync.question('What is your name? ');

console.log(
  'Welcome ' +
  userName +
  ".\n Here are the FAQ/rules:\n 1.There are 3 levels in this quiz and every level will have 5 questions for 1 point.\n 2. You will only be able to play level 2 if you get 5 points and level 3 if you get 10 points.\n SIMPLE RULES LET'S PLAY\n\n"
);

console.log("Please answer the questions by entering [a,b,c] or [A, B, C]");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer) {
    console.log('You are right!');
    score++;
  } else {
    console.log('You are wrong');
  }
  console.log('The score is ' + score);
  console.log('--------------------------------------');
}

var levelOne = [
  {
    question: 'How many Infinity Stones are there? \n A. 3 \n B. 4 \n C. 6 \n',
    answer: 'C'
  },
  {
    question:
      'Where is Captain America from? \n A. Brooklyn \n B. New York \n C. Chicago \n',
    answer: 'A'
  },
  {
    question:
      'Who is Tony Stark’s father? \n A. Dilan Stark \n B. Howard Stark \n C. Jake Stark \n',
    answer: 'B'
  },
  {
    question:
      'Sharon Carter is whose great-niece? \n A. Peggy Carter \n B. Rachel Carter \n C. Monica Carter \n',
    answer: 'A'
  },
  {
    question:
      'What type of doctor is Doctor Strange? \n A. Neurosurgeon \n B. Otolaryngology \n C. Cardiothoracic \n',
    answer: 'A'
  }
];

for (var i = 0; i < levelOne.length; i++) {
  play(levelOne[i].question, levelOne[i].answer);
}

console.log('\n\n***********************************');
console.log('Your score after level 1 is ' + score);
console.log('***********************************\n\n');

if (score === 5) {
  console.log('Congratulations you have reached level 2');
  console.log(
    "The difficuly of question has been increased. Get ready and let's play"
  );

  var levelTwo = [
    {
      question:
        'Whose power “exceeds that of the Sorcerer Supreme”? \n A. Captain America \n B. The Scarlet Witch \n C. Antman \n',
      answer: 'B'
    },
    {
      question:
        'What is Carol Danver’s nickname for Monica Rambeau? \n A. Lieutenant Trouble \n B. Lieutenant Easy \n C. Lieutenant High \n',
      answer: 'A'
    },
    {
      question:
        'Captain America’s shield and Bucky’s arm are made of? \n A. Platinum \n B. Iron \n C. Vibranium \n',
      answer: 'C'
    },
    {
      question:
        'Who was able to pick up Thor’s hammer in Endgame? \n A. Ironman \n B. Spiderman \n C. Captain America \n',
      answer: 'C'
    },
    {
      question:
        'Who was responsible for King T’Chaka’s death? \n A. Ironman \n B. Zemo \n C. Doctor Strange \n',
      answer: 'B'
    }
  ];

  for (var i = 0; i < levelTwo.length; i++) {
    play(levelTwo[i].question, levelTwo[i].answer);
  }

  console.log('\n\n***********************************');
  console.log('Your score after level 2 is ' + score);
  console.log('***********************************\n\n');
} else {
  console.log(
    'Sorry you could not reach level 2, your final score is ' + score
  );
}

if (score === 10) {
  console.log('Congratulations you have reached THE FINAL LEVEL');
  console.log(
    "The difficuly of question has been increased. Get ready and let's play"
  );

  var levelThree = [
    {
      question:
        'In which movie did Spider-Man make his first appearance in the MCU? \n A. Captain America \n B. Ironman 3 \n C. Captain America: Civil War \n',
      answer: 'C'
    },
    {
      question:
        'Wanda and her brother Pietro are from where? \n A. Russia \n B. Sokovia \n C. China \n',
      answer: 'B'
    },
    {
      question:
        'On what planet was the Soul Stone in Infinity War? \n A. Vormir \n B. Earth \n C. Asgard \n',
      answer: 'A'
    },
    {
      question:
        'Which movie kicked off the Marvel Cinematic Universe? \n A. Ironman \n B. Spiderman \n C. Captain America \n',
      answer: 'A'
    },
    {
      question:
        'Black Panther is set in which fictional country? \n A. Australia \n B. India \n C. Wakanda \n',
      answer: 'C'
    }
  ];

  for (var i = 0; i < levelThree.length; i++) {
    play(levelThree[i].question, levelThree[i].answer);
  }

  console.log('\n\n***********************************');
  console.log('Your score after FINAL LEVEL is ' + score);
  console.log('***********************************\n\n');
} else if (score > 5) {
  console.log(
    'Sorry you could not reach level 3, your final score is ' + score
  );
}
