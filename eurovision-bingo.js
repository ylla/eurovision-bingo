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


tropes = ["Clothing change", 
"Instrument gimmick", 
"Keychange", 
"Rap", 
"Terrible accent", 
"Wind machine", 
"Platforms on stage", 
"Trying for audience participation", 
"Pyrotechnics and/or confetti", 
"Ethnic influences", 
"References to european community", 
"Implied homosexuality", 
"Band name as decoration", 
"Odd singing registers (falsetto, tuvan throat singing, yodeling, etc)", 
"Retro-famous dance move", 
"\"Hello cityX!\"", 
"Side step-dance", 
"GLITTER", 
"Tight overall (clothing)", 
"Not serious song", 
"Chocking shoes", 
"Bandname with pun", 
"\"Love\" in song title", 
"Eastern-block votes for eastern-block", 
"Scandinavia votes for scandinavia", 
"Country sent their best singer to competition", 
"Actually famous band", 
"Technical failure", 
"Technical delay", 
"Chocking boobs", 
"Microphone-effect", 
"Obvious wailing", 
"Balloons", 
"Greeting from artist that were unable to make it today", 
"A shoutout/wave to family member in the audience", 
"Overwhelming facepalm", 
"Dancers uniforms don't match artist and/or irrelevant to song", 
"Artist <18 yrs of age", 
"Artist >18 yrs of age, acts like <18", 
"Duet with socially unacceptable age span", 
"Unexpected techno segue", 
"Sunglasses", 
"Lasershow", 
"Audience aware of being filmed, points/stares at video screen", 
"Two hands on microphone", 
"Foul language", 
"Facial paint", 
"Parody of real band", 
"Music medley", 
"Host/hostess dancing", 
"Pointing into camera", 
"Microphone between legs", 
"Visible camera", 
"Obvious local audience-pleaser", 
"Leaning back-to-back", 
"Smoke machine", 
"Backstage footage", 
"Reporter is outdoors", 
"Sepia-filter", 
"Accordion/violin/flute/harmonica/harp", 
"Hand movement 5+ sec", 
"Questionable props", 
"Heavy breathing in mic (no chocolate rain)", 
"Lyrics other than English or native language", 
"Chocking nudity", 
"Patriotism", 
"Bellybutton showing", 
"\"Didn't Enya do this first?\"", 
"\"Is the UK/France/Germany taking this seriously?\"", 
"Interim entertainment would have easily won", 
"Artist of color", 
"Clicking one's heels", 
"Screaming fans up close", 
"Pun in song title", 
"Reference to ABBA", 
"Sign with name", 
"Comical sign", 
"Peace theme from war nation"]