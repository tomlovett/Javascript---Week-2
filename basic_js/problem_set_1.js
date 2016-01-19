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
	if (text && typeof text == "string") { 
		var words = 1;
	} else { 
		console.log('Error, input is not a word');
		return false;
	}
	for (var i=0; i < text.length; i++) {
		if (text[i] === ' ') { words += 1;}
	}
	return words;
}

console.log(wordCount('messed around and hit a triple-double'));

primes = [2];
function allPrimes(limit) {
	for (var i=3; i<limit; i+=2) {
		// if (primeTime(i)) {
		if (checkAgainstPrimes(i)) {
			if (primes.indexOf(i) === -1)
			primes.push(i)
		}
	}
}

function checkAgainstPrimes(x) {
	for (var i=0; i<primes.length; i++) {
		if (x % primes[i] === 0) { 
			return false;
		}
	}
	return true;
}

function primeTime(x) {
	if (x % 2 === 0) { return false; }
	for (var i = 3; i < x/2; i += 2) {
		if (x % i === 0) { return false; }
	}
	return true;
}

function expo(num, exponent) {
	result = num
	for (var i=1; i<exponent; i++) {
		result = result * num
	}
	return result;
}