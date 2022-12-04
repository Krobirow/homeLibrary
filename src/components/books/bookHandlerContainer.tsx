import * as React from 'react';
import { connect } from 'react-redux';
import BookCard from './bookCard/bookCard';
import './bookHandler.scss';
import BooksSearch from './booksSearch/booksSearch';
import {addBook, removeBook, searchBook } from '../../reduxStore/bookHandlerReducer';
import { reset } from 'redux-form';

class BookHandlerContainer extends React.Component<any, any> {
  onFormSubmit = (formData) => {
    const {authorName, bookTitle, publicationDate} = formData;
    
    this.props.addBook(authorName, bookTitle, publicationDate);
    this.props.resetForm();
  }

  render() {
    const filteredBooks = this.props.books.books.filter(book => {
      return book.bookTitle.toLowerCase().includes(this.props.books.inputValue.toLowerCase())
    });

    return (
      <div className="bookHandlerContainer container">
        <BooksSearch books={this.props.books} searchBookAC={this.props.searchBook}/>
        <BookCard books={this.props.books} filteredBooks={filteredBooks} onFormSubmit={this.onFormSubmit} removeBook={this.props.removeBook} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
	return {
    books: state.bookHandlerReducer,
	}
}

const mapDispatchToProps = dispatch => {
  return {
    searchBook: (value) => dispatch(searchBook(value)),
    addBook: (authorName, bookTitle, publicationDate) => dispatch(addBook(authorName, bookTitle, publicationDate)),
    removeBook: (bookId) => dispatch(removeBook(bookId)),
    resetForm: () => dispatch(reset('formCreateNewBook'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookHandlerContainer);