import React from 'react';
import './bookCard.scss';
import CreateNewBook from './createNewBook/createNewBook';

import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const fadeInDownAN = keyframes`${fadeInDown}`;
const FadeInDownDiv = styled.div`animation: 1s ${fadeInDownAN};`;

const BookCard = ({ books, filteredBooks, onFormSubmit, removeBook }) => {
  const eachCard = filteredBooks.map(oneBook => {
    return (
      <FadeInDownDiv key={oneBook.id} className={`${filteredBooks.length <= 1 ? "col-12 mb-3 mt-3" : (books.books.length === 2) ? "col-xl-3 col-lg-4 col-md-5 col-sm-12 col-12 mb-3 mt-3" : "col-xl-3 col-lg-4 col-md-5 col-sm-12 col-12 mb-3 mt-3"} `}>
        <div className="cardWrapper card row no-gutters">
          <div className="offset-md-1 col-md-10 d-flex flex-column justify-content-between">
            <div className="card-body">
              <div className="cardColumn pb-2">
                <p className="card-title text-success p-0 m-0">Author Name:</p>
                <p className="card-title text-primary p-0 m-0">{oneBook.authorName}</p>
              </div>
              <div className="cardColumn pb-2">
                <p className="card-text text-success p-0 m-0">Book Title: </p>
                <p className="card-text text-primary">{oneBook.bookTitle}</p>
              </div>
              <div className="cardColumn pb-2">
                <p className="card-text text-success p-0 m-0">Publication Date:</p>
                <p className="card-text text-primary">{oneBook.publicationDate}</p>
              </div>
            </div>
            <button type="button" className="btn btn-success mb-3" onClick={() => { removeBook(oneBook.id) }}>Remove Book</button>
          </div>
        </div>
      </FadeInDownDiv>
    )
  }, removeBook);

  return (
    <div className="row no-gutters">
      {eachCard.length >= 1 ? eachCard : <div className={"col-12 d-flex justify-content-center my-3"}>No results found, but You can add a new book</div>}
      <div className={"col-12 d-flex justify-content-center"}>
        <CreateNewBook onSubmit={onFormSubmit} />
      </div>
    </div>
  );
}

export default BookCard;
