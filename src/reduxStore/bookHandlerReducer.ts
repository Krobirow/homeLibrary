import { AnyAction } from "@reduxjs/toolkit";
import { CardTypes } from "../components/books/booksInterfaces";

enum BooksActionsEnum {
  ADD_BOOK = "ADD_BOOK",
  REMOVE_BOOK = "REMOVE_BOOK",
  SEARCH_BOOK = "SEARCH_BOOK",
}

let initialState = {
  inputValue: "",
  bookId: null as string | null,
  books: [
    {
      id: 1,
      authorName: "Douglas Adams",
      bookTitle: "The Hitchhiker's Guide to the Galaxy",
      publicationDate: 1979
    },
    {
      id: 2,
      authorName: "Douglas Adams",
      bookTitle: "The Restaurant at the End of the Universe",
      publicationDate: 1980
    },
    {
      id: 3,
      authorName: "Douglas Adams",
      bookTitle: "Life, the Universe and Everything",
      publicationDate: 1982
    },
    {
      id: 4,
      authorName: "Douglas Adams",
      bookTitle: "So Long, and Thanks for All the Fish",
      publicationDate: 1984
    },
    {
      id: 5,
      authorName: "Douglas Adams",
      bookTitle: "Dirk Gently's Holistic Detective Agency",
      publicationDate: 1987
    },
  ] as Array<CardTypes>,
}

type BookReducerInitState = typeof initialState;

const bookHandlerReducer = (state: BookReducerInitState = initialState, action: AnyAction): BookReducerInitState => {
  switch (action.type) {
    case BooksActionsEnum.ADD_BOOK:
      return {
        ...state,
        books: [...state.books,
        {
          id: state.books.length + 2,
          authorName: action.authorName,
          bookTitle: action.bookTitle,
          publicationDate: action.publicationDate
        }
        ]
      }
    case BooksActionsEnum.REMOVE_BOOK:
      const idx = state.books.findIndex(el => el.id === +action.bookId);
      return {
        ...state,
        books: [
          ...state.books.slice(0, idx),
          ...state.books.slice(idx + 1),
        ]
      }
    case BooksActionsEnum.SEARCH_BOOK:
      return {
        ...state,
        inputValue: action.inputValue,
        books: state.books
      }
    default:
      return state;
  }
}

export default bookHandlerReducer;


export const addBook = (authorName: string, bookTitle: string, publicationDate: number) => ({ type: BooksActionsEnum.ADD_BOOK, authorName, bookTitle, publicationDate });
export const removeBook = (bookId: string) => ({ type: BooksActionsEnum.REMOVE_BOOK, bookId });
export const searchBook = (inputValue: string) => ({ type: BooksActionsEnum.SEARCH_BOOK, inputValue });