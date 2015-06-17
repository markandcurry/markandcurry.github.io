// five questions
var score = 0;
var thatsCorrect = "That's correct!";
var thatsWrong = "That's wrong!";
// question one
var firstQuestion = prompt('Who is president?');
if (firstQuestion.toUpperCase() === 'OBAMA' ) {
  alert(thatsCorrect);
  score += 1;
  alert('Your score is ' + score); 
} else {
  alert(thatsWrong);
  alert('Your score is ' + score); 
}
// question two
var firstQuestion = prompt('what is your name?');
if (firstQuestion.toUpperCase() === 'MARK' ) {
  alert(thatsCorrect);
  score += 1;
  alert('Your score is ' + score); 
} else {
  alert(thatsWrong);
  alert('Your score is ' + score); 
}
// question three
var firstQuestion = prompt('How are you?');
if (firstQuestion.toUpperCase() === 'GOOD' ) {
  alert(thatsCorrect);
  score += 1;
  alert('Your score is ' + score); 
} else {
  alert(thatsWrong);
  alert('Your score is ' + score); 
}
// question four
var firstQuestion = prompt('What computer language are you learning?');
if (firstQuestion.toUpperCase() === 'JAVASCRIPT' ) {
  alert(thatsCorrect);
  score += 1;
  alert('Your score is ' + score); 
} else {
  alert(thatsWrong);
  alert('Your score is ' + score); 
}
// question five
var firstQuestion = prompt('Are you hungry?');
if (firstQuestion.toUpperCase() === 'YES' ) {
  alert(thatsCorrect);
  score += 1;
  alert('Your score is ' + score); 
} else {
  alert(thatsWrong);
  alert('Your score is ' + score); 
}
// final message and award
if (score === 5) {
  document.write('Your score is ' + score + ".You're golden!") ;
} else if (score === 4) {
  document.write('Your score is ' + score + ".You're silver!") ;
} else if (score === 3) {
  document.write('Your score is ' + score + ".You're bronze!") ;
} else {
  alert("Try again!") ;
}
