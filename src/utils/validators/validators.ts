
export const required = (value: string): string | undefined => value ? undefined : 'Field is required';

export const numberOnly = (value: string): string | undefined => value && /[^0-9]/g.test(value) ? 'Numbers only required' : undefined;
export const name = (value: string): string | undefined => value && /[^A-Za-z ]/g.test(value) ? 'Letters only required' : undefined;

export const maxlengthCreator = (maxLength: number): Function => (value: string): string | undefined => value && value.length > maxLength ? `Max length is ${maxLength} characters` : undefined;

export const maxStringLength = maxlengthCreator(50);
export const maxNumLength = maxlengthCreator(4);