export type CardTypes = {
  id: number,
  authorName: string,
  bookTitle: string,
  publicationDate: number,
}

export type BookCardProps = {
  books: {
    inputValue: string,
    books: Array<CardTypes>
  },
  filteredBooks: Array<CardTypes>, 
  onFormSubmit: Function, 
  removeBook: Function,
}

export type FormDataType = {
  authorName: string, 
  bookTitle: string, 
  publicationDate: string,
}

export type BookHandlerContainerProps = {
  addBook: Function,
  resetForm: Function,
  searchBook: Function,
  removeBook: Function,
  books: {
    inputValue: string,
    books: Array<CardTypes>
  },
}
export interface BooksSearchProps {
  books: {
    inputValue: string,
    books: Array<CardTypes>
  },
  searchBookAC: Function
}