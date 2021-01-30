import React from 'react';
import {books} from './../content/content';
import BuyButton from './BuyButton/BuyButton';
import callingAWolfAWolfCover from './../images/calling-a-wolf-a-wolf.jpg';
import portaitOfTheAlcoholicCover from './../images/portait-of-the-alcoholic.jpg';
import pilgrimBellCover from './../images/pilgrim-bell.jpg';

const COVERS = {
  "calling-a-wolf-a-wolf": callingAWolfAWolfCover,
  "portait-of-the-alcoholic": portaitOfTheAlcoholicCover,
  "pilgrim-bell": pilgrimBellCover
};

function Books() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {books.map(book => (
              <div className={'col-lg-4 col-md-4'} key={book.title}>
                <div className="book d-flex flex-column">
                  <a href={book.url} title={`Order ${book.title}`}>
                    <img
                      src={COVERS[book.img]}
                      alt={book.title}
                      className="img-fluid book-cover"
                    />
                  </a>
                  <h6 className="book-header">BOOK</h6>
                  <h4 className="book-title">
                    <em>{book.title.toUpperCase()}</em>
                  </h4>
                  <div className="book-quotes">
                    {book.quotes.map((q, index) => (
                        <p
                          className="book-quote"
                          key={`${book.title.replace(/\s/g, '')}q${index}`}
                        >
                          {q.quote}
                          <br />
                          {q.speaker && `- ${q.speaker}`}
                          {q.publication && ' in '}
                          {q.publication && <em>{q.publication}</em>}
                        </p>
                      ))}
                  </div>
                  <BuyButton links={book.urls} preorder={book.preorder} title={`Order ${book.title} Online`} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Books;
