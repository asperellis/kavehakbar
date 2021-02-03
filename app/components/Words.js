import React from 'react';
import {words} from './../content/content';

function Words() {
  return (
    <section className="words">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <blockquote>
              &ldquo;Akbar is a sumptuous, remarkably painterly poet.&rdquo;
              <br />
              <span className="italic">- The Kenyon Review</span>
            </blockquote>
          </div>
          <div className="col-md-8">
            <h6 className="section-header">SELECTED ONLINE POEMS</h6>
            <p>
              {words.online.map((poem, i) => (
                    <div className="poem">
                      <a href={poem.url} title={`Read ${poem.title}`} key={`online${i}`}>
                        {poem.title}
                      </a>
                      <em>, <br className="poem-line-break" />{poem.publication}</em>
                    </div>
                ))}
            </p>
            <h6 className="section-header">REVIEWS</h6>
            {words.reviews.map((book, i) => (
                <p key={`reviews${i}`}>
                  <em>{book.title}</em>
                  <br />
                  {book.reviews.map((review, index) => {
                    return (
                      <a
                        href={review.url}
                        title={`${book.title} ${review.title} in ${review.publication}`}
                        key={`${review.publication.replace(/\s/g, '')}${index}`}
                      >
                        {review.title}
                        <em>{review.publication}</em>
                        <br />
                      </a>
                    );
                  })}
                </p>
              ))}
            <h6 className="section-header">CONVERSATIONS</h6>
            <p>
              {words.conversations.map((conversation, i) => (
                  <a
                    href={conversation.url}
                    key={`conversations${i}`}
                    title={`Conversation with ${conversation.with}`}
                  >
                    with <em>{conversation.with}</em>
                    <br />
                  </a>
                ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Words;
