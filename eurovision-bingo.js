tropes = []
for (var i = 0; i < 25; i++) {
	tropes.push("" + i);
}

function random_range(lower, upper) {
	return lower + Math.floor((upper - lower) * Math.random());
}

function extract_random_element(array_) {
	index = random_range(0, array_.length);
	return array_.splice(index, 1)[0];
}

populate = function() {
	cells = document.querySelectorAll("td");
	for (var i = 0; i < cells.length; i++) {
		element = extract_random_element(tropes);
		cells[i].innerText = element;
	}
};

document.addEventListener('DOMContentLoaded', populate, false);
