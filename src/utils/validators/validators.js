
export const required = value => value ? undefined : 'Field is required';

export const numberOnly = value => value && /[^0-9]/g.test(value) ? 'Numbers only required' : undefined;
export const name = value => value && /[^A-Za-z]/g.test(value) ? 'Letters only required' : undefined;

export const maxlengthCreator = maxLength => value => value && value.length > maxLength ? `Max length is ${maxLength} characters` : undefined;

export const maxStringLength = maxlengthCreator(50);
export const maxNumLength = maxlengthCreator(4);