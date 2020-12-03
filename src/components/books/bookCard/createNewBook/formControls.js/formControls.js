import React from 'react';
import { Field } from 'redux-form';
import "./formControls.scss";

export const FormControl = ({ input, meta: {active, error}, children, ...props}) => {
    const hasError = active && error;
	return (
        <>
            <div className={"formControl input-group my-1 " + (hasError ? "error" : "")}>
                {children}
            </div>
            {hasError && <span className="text-danger">{error}</span>}
        </>
	);
};

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			{" "}
			<input {...input} {...restProps} />
		</FormControl>
	);
};

export const createField = (type, placeholder, name, validators, component, className, value = "", text = "") => (
	<>
		<Field
			type={type}
			placeholder={placeholder}
			name={name}
			component={component}
			validate={validators}
            className={className}
            value={value}
		/>
	</>
);