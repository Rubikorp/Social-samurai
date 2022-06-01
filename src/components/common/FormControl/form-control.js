import {Field} from "formik";
import React from "react";

export const createField = (type, name, placeholder, validate, className = '', id='') =>
    <Field
        type={type} name={name}
        placeholder={placeholder}
        validate={validate}
        className={className}
        id={id}
    />

