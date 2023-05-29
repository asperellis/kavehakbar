export type Event = {
    url?: string,
    date: string,
    time?: string,
    name: string,
    guests?: string,
    location: string,
    address?: string
}

export type Url = {
    text: string,
    url: string
}

export type Quote = {
    quote: string,
    speaker?: string,
    publication?: string
}

export type Book = {
    urls: Url[],
    preorder: boolean,
    title: string,
    type: 'BOOK' | 'CHAPBOOK' | 'ANTHOLOGY',
    img: string,
    quotes: Quote[]
}

export type Article = {
    title: string,
    url: string,
    publication: string
}

export type Review = {
    title: string
    reviews: Article[]
}

export type Words = {
    online: Article[],
    prose: Article[],
    reviews: Review[],
    conversations: Url[],
    press: Article[],
}
