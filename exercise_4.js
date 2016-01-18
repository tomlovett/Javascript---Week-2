// on submit:
	// gen new table row in respective table
	// gen/add td for Name, phoneNumber, street
		// document.getElementById("victims/volunteers").appendChild(td(content))
// [form].elements.[field].value

form = document.querySelector('form');
form.addEventListener('submit', function(event) {
	if (form.elements.role.value == 'victim') {
		var table = document.getElementById('victims');
		console.log('victims')
	} else {
		var table = document.getElementById('volunteers');
		console.log('volunteers')
	}
	var row = document.createElement('tr');
	console.log(form.name.value);
	table.appendChild(td(form.elements.name.value));
	console.log(form.elements.phoneNumber.value);
	table.appendChild(td(form.elements.phoneNumber.value));
	table.appendChild(td(form.elements.street.value));
	console.log(form.elements.street.value);
	table.appendChild(row);
	event.preventDefault();
})

function td(content) {
	console.log('td called')
	var element = document.createElement('td');
	var text = document.createTextNode(content);
	element.appendChild(text);
	return element;
}