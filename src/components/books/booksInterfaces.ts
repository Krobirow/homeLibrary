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
  addBook: (authorName: string, bookTitle: string, publicationDate: number) => any,
  resetForm: Function,
  searchBook: (bookId: string) => any,
  removeBook: (inputValue: string) => any,
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