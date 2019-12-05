	let inputs = document.querySelectorAll('input[data-rules]');
	for (let input of inputs)
	input.addEventListener ('blur', function() {
	let rules = this.dataset.rules;
	let value = this.value;
	let check;

	switch (rules) {
	case 'tel':
	check =  /^\d+$/.test(value);
	break;
}
});

case 'email':
break;

	if (check) {
		this.classList.add('valid');
	else {
		this.classList.add('invalid');
}
	if (check) {
		this.classList.remove('invalid');
		this.classList.add('valid');
}
	else {
		this.classList.remove('valid');
		this.classList.add('invalid');
}