function letterCapitalize(text) {
	text = text.split(' ')
	for (var i=0; i < text.length; i++) {
		word = text[i].split('')
		word[0] = word[0].toUpperCase()
		text[i] = word.join('')
	}
	return text.join(' ')
}

console.log(letterCapitalize('today was a good day'));

function wordCount(text) {
	if (text && typeof text == "string") { var words = 1; }
	for (var i=0; i < text.length; i++) {
		if (text[i] == ' ') { words += 1;}
	}
	return words;
}

console.log(wordCount('messed around and hit a triple-double'));

function primeTime(num) {
	if (num % 2 === 0) { return false; }
	for (var i=3; i<num/2; i+= 2) {
		if (num % i === 0) { return false; }
	}
	return true;
}

var x = 55;
while (!primeTime(x)) { x+= 2; }
console.log(x);