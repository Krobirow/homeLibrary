const ADD_BOOK = "ADD_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";
const SEARCH_BOOK = "SEARCH_BOOK";

let initialState = {
  inputValue: "",
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
  ],
};

const bookHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
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
    case REMOVE_BOOK:
      const idx = state.books.findIndex((el) => el.id === action.bookId);
      return {
        ...state,
        books: [
          ...state.books.slice(0, idx),
          ...state.books.slice(idx + 1),
        ]
      }
    case SEARCH_BOOK:
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

export const addBook = (authorName, bookTitle, publicationDate) => ({ type: ADD_BOOK, authorName, bookTitle, publicationDate });
export const removeBook = (bookId) => ({ type: REMOVE_BOOK, bookId });
export const searchBook = (inputValue) => ({ type: SEARCH_BOOK, inputValue });