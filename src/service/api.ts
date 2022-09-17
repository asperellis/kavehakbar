import * as data from './data'

export const getBooks = () => data.books
export const getBookByTitle = (title: string) => data.books.find(book => book.title === title);
export const getReadings = () => data.readings
export const getWords = () => data.words