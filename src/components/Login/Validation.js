

const Validation = {
	// Валидация email
	validateEmail(value) {
		let error;
		if (!value) {
			error = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = 'Invalid email address';
		}
		return error;
	},

	// Валидация password
	validatePassword(value) {
		let error;
		if (!value) {
			error = 'Required'}
		else if (value.length <= 3) {
			error = 'length 3 symbols'
		}
		return error
	}
}

export default Validation