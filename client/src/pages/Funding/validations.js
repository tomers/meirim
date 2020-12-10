export const paymentRequestValidation = ({ amount, termsAccepted }) => {
	const isValidAmount = Number.isInteger(amount);
	const isValidAcceptedTerms =  termsAccepted || false;

	return { isValidAmount, isValidAcceptedTerms}
}

const termsNotAccepted = 'נא לאשר את תנאי התמיכה'
const invalidAmountMessage = 'נא לבחור סכום לתמיכה'
const emptyString = ''

export const getFormErrors = ({ 
	validations: { isValidAmount, isValidAcceptedTerms }})=>{
	
	const amountError = { 
		isValid: isValidAmount,
		message: isValidAmount ? emptyString : invalidAmountMessage
	}
	const termsAcceptedError = { 
		isValid: isValidAcceptedTerms, 
		message: isValidAcceptedTerms ? emptyString : termsNotAccepted
	}
	
	return { amountError, termsAcceptedError }
}



