var phoneNumber = prompt("What is your phone number? (XXX-XXX-XXXX)\n(The NSA is already listening in so I wouldn't worry what we'll do with it.)");
var birthDate = prompt("And your birthday? (MM/DD/YY)");
var postalCode = prompt('And your zip code? (XXXXX or XXXXX-XXXX');
var state = prompt("And your state? (XX)");
var married = prompt("And is you married, girl? (Yes or No)");
try {married = married.toLowerCase();} catch (error) {'Uh oh.';}

var valKey = [
	/\d\d\d-\d\d\d-\d\d\d\d/, 	// phoneNumber
	/\d\d\/\d\d\/\d\d/, 		// birthDate
	/\d\d\d\d\d(-\d\d\d\d)?/,	// postalCode
	/\w\w/, 					// state
	/(yes|no)/ 					// married
]

function validateAll() {
	var allInput = [phoneNumber, birthDate, postalCode, state, married]
	var inputKey = ['Phone number', 'Birthday', 'Zip code', 'State', 'Marriage status']
	var output = ''
	for (var i = 0; i < allInput.length; i++) {
		output = output + inputKey[i]
		if (valKey[i].test(allInput[i])) {
			output = output + ' is good!\n'
		} else {
			output = output + ' is no bueno...\n'
		}
	}
	return output;
}

alert(validateAll());