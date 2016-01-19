function tripleFive() {
	for (var i=0; i<3; i++) console.log('Five!')
}

function lastLetter(input) {
	return input.charAt(input.length-1);
}

function square(val) {
	return val * val;
}

function negate(val) {
	return -val;
}

function toArray(arg1, arg2, arg3) {
	return [arg1, arg2, arg3];
}

function startsWithA(input) {
	// return (input.charAt(0).toLowerCase() == 'a');
	return /^(a|A)/.test(input);
}

function excite(input) {
	return input + '!!!';
}

function sun(input) {
	try {input = input.toLowerCase()
	} catch (error) {
		return 'No bueno, muchacho.\n' + error.toString();
	}
	return /sun/.test(input);
	//
	// for (var i=0; i<input.length-2; i++) {
	// 	if (input.charAt(i) == 's') {
	// 		if (input.charAt(i+1) == 'u') {
	// 			if (input.charAt(i+2) == 'n')) {
	// 				return true;
	// 			}
	// 		}
	// 	}
	// }
	//
	// for (var i=0; i<input.length-2; i++) {
	// 	if (input.charAt(i) == 's' && input.charAt(i+1) == 'u' && (input.charAt(i+2) == 'n'))
	// 		return true;
	// }
	// return false;
}

function tiny(val) {
	return (val > 0 && val < 1);
}

function getSeconds(time) {
	time = time.split(':');
	return (Number(time[0]) * 60) + Number(time[1]);
}