$(document).ready(function() {

var	allQuestions = [
	        {
	        number: 1,
			question: "A _______ is used by most forex brokers to close out an open position at the end of the business day, and reopen an identical position as of the next day",
			possibleAnswers: ["carry trade", "rollover swap", "spot trade", "margin calculation"],
			correctAnswer: "rollover swap"
		},
		    {
	        number: 2,
			question: "Once the position is closed, gains and losses are said to be _________.",
			possibleAnswers: ["banked", "won", "realized", "capitalized"],
			correctAnswer: "realized"
		},
		    {
			number: 3,
	        question: "Some brokers offer an additional digit of precision for certain exchange rates. This extra digit is commonly referred to as a _________.",
			possibleAnswers: ["fractional pip", "miniscule pip", "transient pip", "fiscal pip"],
			correctAnswer: "fractional pip"
		},
		    {
	        number: 4,
			question: "The difference between the bid price and the ask price is known as the _________.?",
			possibleAnswers: ["interest rate", "spread", "point of interest", "marginal buy price"],
			correctAnswer: "spread"
		},
		    {
	        number: 5,
			question: "In the EUR/USD currency pair, EUR is the ________ currency and USD is the _________ or counter currency.",
			possibleAnswers: ["bought, sold", "first, second", "strong, weak", "base, quote"],
			correctAnswer: "base, quote"
		},
		 
	];

var userScore = 0;
var currentTurn = 0;


//to add to the counter at the bottom right
var counter = 1;
var counting = function(){
	counter += 1;
	$('#count').replaceWith("<span id='count'>" + counter + "</span>");
};

//how to play the game
var gamePlay = function() {
	
//	making sure the user has made a choice

	if(currentTurn < 5 && ($('input[name=choice]:checked').length > 0)) {
	counting();
	

//	getting the value of the user choice

		var userChoice = $('input[name=choice]:checked').val();
			console.log(userChoice);

	//  to add one point to user score if answer is correct
		var userScoring = function() {
				if(userChoice === allQuestions[currentTurn].correctAnswer) {
				userScore += 1;
				console.log(userScore);
				$('.wrapper').addClass('correct');
				$('.wrapper').removeClass('incorrect');

				}
				else if (userChoice !== allQuestions[currentTurn].correctAnswer) {
				$('.wrapper').addClass('incorrect');
				$('.wrapper').removeClass('correct');
			
				console.log(userScore);
				}
			currentTurn += 1;	
	 		console.log(currentTurn);
			};	

		userScoring();
		}

	else{
		alert("Please choose an answer!");
	}

};


//what happens when user clicks submit button
$("#submitButton").on("click", function() {
	event.preventDefault();
	console.log("Submit Button Clicked");
	gamePlay();

// how to load next question and or final score
	if (currentTurn < 5) {
		$("#question").replaceWith("<h2 id = 'question'>" + allQuestions[currentTurn].question + "</h2>");
		$("#choice1").replaceWith("<li id = 'choice1'>" + "<input type='radio' name='choice' value='" +allQuestions[currentTurn].possibleAnswers[0]+ "'>" +allQuestions[currentTurn].possibleAnswers[0]+ "</li>");
		$("#choice2").replaceWith("<li id = 'choice2'>" + "<input type='radio' name='choice' value='" +allQuestions[currentTurn].possibleAnswers[1]+ "'>" +allQuestions[currentTurn].possibleAnswers[1]+ "</li>");
		$("#choice3").replaceWith("<li id = 'choice3'>" + "<input type='radio' name='choice' value='" +allQuestions[currentTurn].possibleAnswers[2]+ "'>" +allQuestions[currentTurn].possibleAnswers[2]+ "</li>");
		$("#choice4").replaceWith("<li id = 'choice4'>" + "<input type='radio' name='choice' value='" +allQuestions[currentTurn].possibleAnswers[3]+ "'>" +allQuestions[currentTurn].possibleAnswers[3]+ "</li>");
	}


	else {
	$("#possibleAnswers").find("ul").hide();
	$('#finalScore').replaceWith("<span id='finalScore'>" + userScore + "</span>").fadeIn(1000);
	$("#possibleAnswers").find("h3").fadeIn(1000);
	$("#question").replaceWith("<h2 id = 'question'>" + "All done! Your score is..." + "</h2>").fadeIn(1000);
	$('#count').replaceWith("<span id='count'>" + "1" + "</span>");
}
	
});


//what happens when user clicks new game button
$("#newGame").on("click", function(){
	console.log("New Game Button Clicked");
 	location.reload();
	});
});
