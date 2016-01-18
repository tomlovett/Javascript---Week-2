// on submit:
	// gen new table row in respective table
	// gen/add td for Name, phoneNumber, street
		// document.getElementById("victims/volunteers").appendChild(td(content))
// [form].elements.[field].value

var victims = [];
var volunteers = [];

var form = document.getElementById('submitVicsVols');
form.addEventListener('submit', function(event) {
	var name = form.elements.name.value;
	var phoneNumber = form.elements.phoneNumber.value;
	var street = form.elements.street.value;
	if (form.elements.role.value == 'victim') {
		var table = document.getElementById('victims');
		victims.push({'name': name, 'phoneNumber': phoneNumber, 'street': street})
	} else {
		var table = document.getElementById('volunteers');
		volunteers.push({'name': name, 'phoneNumber': phoneNumber, 'street': street})	}
	var row = document.createElement('tr');
	table.appendChild(td(name));
	table.appendChild(td(phoneNumber));
	table.appendChild(td(street));
	table.appendChild(row);
	event.preventDefault();
})

function td(content) {
	var element = document.createElement('td');
	var text = document.createTextNode(content);
	element.appendChild(text);
	return element;
}

var find = document.getElementById('findVolunteers');
var found = document.getElementById('found')
find.addEventListener('submit', function(event) {
	var street = find.elements.street.value;
	var anyFound = false
	for (var i=0; i < volunteers.length; i++) {
		if (volunteers[i]['street'] == street) {
			var text = [volunteers[i]['name'], volunteers[i]['phoneNumber']].join(' ');
			text = document.createTextNode(text);
			found.appendChild(text);
			anyFound = true;
		}
	}
	if (!anyFound) {
		found.appendChild(document.createTextNode('No volunteers found for:  ' + street.toString() + '  :('))
	}
	event.preventDefault();
})