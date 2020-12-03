
export const required = value => value ? undefined : 'Field is required';

export const numbers = value => value && isNaN(Number(value)) ? "Must be a number" : undefined;

export const maxlengthCreator = maxLength => value => value && value.length > maxLength ? `Max length is ${maxLength} charakters` : undefined;

export const maxStringLength = maxlengthCreator(50);
export const maxNumLength = maxlengthCreator(4);