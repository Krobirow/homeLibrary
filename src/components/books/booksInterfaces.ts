export type CardTypes = {
  id: number,
  authorName: string,
  bookTitle: string,
  publicationDate: number,
}

export type BookCardProps = {
  readonly books: {
    inputValue: string,
    books: Array<CardTypes>
  },
  readonly filteredBooks: Array<CardTypes>, 
  readonly onFormSubmit: Function, 
  readonly removeBook: Function,
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
  readonly books: {
    inputValue: string,
    books: Array<CardTypes>
  },
}