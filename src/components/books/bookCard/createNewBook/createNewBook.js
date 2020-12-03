import React from 'react';
import { reduxForm } from 'redux-form';
import './createNewBook.scss';
import { required, maxStringLength, maxNumLength, numbers } from "../../../../utils/validators/validators";
import { Input, createField } from './formControls.js/formControls';

import styled, { keyframes } from 'styled-components';
import { zoomInUp } from 'react-animations';
const zoomInUpAN = keyframes`${zoomInUp}`;
const ZoomInUpDiv = styled.div`animation: 1s ${zoomInUpAN};`;


const  NewBookForm = (props) =>  {
        return (
            
            <form onSubmit={props.handleSubmit}>
                <h5>Add Some Book</h5>
                <div>
                {createField("text", "Provie an author name", "authorName", [required, maxStringLength], Input, "col-12 form-control authorName")}
                {createField("text", "Provie a book title", "bookTitle", [required, maxStringLength], Input, "col-12 form-control booktitle")}
                {createField("text", "Provie a publication date", "publicationDate", [required, maxNumLength, numbers], Input, "col-12 form-control publicationDate")}
                </div>
                <button type="submit" className={"btn btn-primary mt-2"} >Add Book</button>
            </form>
        );
}

const ReduxNewBookForm =  reduxForm({form:"formCreateNewBook"})(NewBookForm);

const CreateNewBook = (props) => {
    return (
        <ZoomInUpDiv className="card col-xl-4 col-lg-4 col-md-5 offset-sm-1 col-sm-10 col-12 no-gutters p-3">
            <ReduxNewBookForm onSubmit={props.onSubmit} />
        </ZoomInUpDiv>
    );
}


export default CreateNewBook;
