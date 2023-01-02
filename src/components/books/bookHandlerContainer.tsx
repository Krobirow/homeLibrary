import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import BookCard from './bookCard/bookCard';
import './bookHandler.scss';
import BooksSearch from './booksSearch/booksSearch';
import { addBook, removeBook, searchBook } from '../../reduxStore/bookHandlerReducer';
import { reset } from 'redux-form';
import { BookHandlerContainerProps, CardTypes, FormDataType } from './booksInterfaces';


class BookHandlerContainer extends React.Component<BookHandlerContainerProps, {}> {
  onFormSubmit = (formData: FormDataType): void => {
    const { authorName, bookTitle, publicationDate } = formData;

    this.props.addBook(authorName, bookTitle, publicationDate);
    this.props.resetForm();
  }

  render() {
    const filteredBooks = this.props.books.books.filter((book: CardTypes) => {
      return book.bookTitle.toLowerCase().includes(this.props.books.inputValue.toLowerCase())
    });

    return (
      <div className="bookHandlerContainer container">
        <BooksSearch books={this.props.books} searchBookAC={this.props.searchBook} />
        <BookCard books={this.props.books} filteredBooks={filteredBooks} onFormSubmit={this.onFormSubmit} removeBook={this.props.removeBook} />
      </div>
    );
  }
}

let mapStateToProps = (state: any) => {
  return {
    books: state.bookHandlerReducer,
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<void, any, AnyAction>) => {
  return {
    searchBook: (value: string): any => dispatch(searchBook(value)),
    addBook: (authorName: string, bookTitle: string, publicationDate: number): any => dispatch(addBook(authorName, bookTitle, publicationDate)),
    removeBook: (bookId: number): any => dispatch(removeBook(bookId)),
    resetForm: (): any => dispatch(reset('formCreateNewBook'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookHandlerContainer);