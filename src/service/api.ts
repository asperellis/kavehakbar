import * as data from './data'

export const getBooks = () => data.books
export const getBookByTitle = (title: string) => data.books.find(book => book.title === title);
export const getEvents = () => data.events
export const getWords = () => data.words