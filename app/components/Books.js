import React from 'react';
import { books } from './../content/content';

const images = [];
books.forEach(b => {
  images.push(require('./../images/' + b.img));
});

function Books() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {books.map((b, i) => {
            return (
              <div
                className={[
                  'col-lg-4',
                  'col-md-6',
                  i === 0 && 'offset-lg-2'
                ].join(' ')}
                key={i}
              >
                <div className="book d-flex flex-column">
                  <a href={b.url} title={'Order ' + b.title}>
                    <img
                      src={images[i]}
                      alt={b.title}
                      className="img-fluid book-cover"
                    />
                  </a>
                  <h6 className="book-header">{'BOOK'}</h6>
                  <h4 className="book-title">
                    <em>{b.title.toUpperCase()}</em>
                  </h4>
                  {b.quotes.map((q, index) => {
                    return (
                      <p
                        className="book-quote"
                        key={b.title.replace(/\s/g, '') + 'q' + index}
                      >
                        {q.quote}
                        <br />
                        {q.speaker && '- ' + q.speaker}
                        {q.publication && ' in '}
                        {q.publication && <em>{q.publication}</em>}
                      </p>
                    );
                  })}
                  <a href={b.url} className="button" title={'Order ' + b.title}>
                    {'ORDER ONLINE'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Books;
