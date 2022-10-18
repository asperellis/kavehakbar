import React from 'react';
import { getWords } from '../../service';

const words = getWords()

export const Words = () => {
  return (
    <section className="words">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <blockquote>
              &ldquo;Akbar is exquisitely sensitive to how language can function as both presence and absence.&rdquo;
              <br />
              <span className="italic">- The New Yorker</span>
            </blockquote>
          </div>
          <div className="col-md-8">
            <h6 className="section-header">SELECTED ONLINE POEMS</h6>
            <div>
              {words.online.map((poem, i) => (
                  <div className="poem" key={`poems${i}`}>
                    <a href={poem.url} title={`Read ${poem.title}`} key={`online${i}`}>
                      {poem.title}
                    </a>
                    <em>, <br className="poem-line-break" />{poem.publication}</em>
                  </div>
              ))}
            </div>
            <h6 className="section-header">SELECTED ONLINE PROSE</h6>
            <div>
              {words.prose.map((prose, i) => (
                    <div className="poem" key={`prose${i}`}>
                      <a href={prose.url} title={`Read ${prose.title}`} key={`prose${i}`}>
                        {prose.title}
                      </a>
                      <em>, <br className="poem-line-break" />{prose.publication}</em>
                    </div>
                ))}
            </div>
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
            <div>
              {words.conversations.map((conversation, i) => (
                  <a
                    href={conversation.url}
                    key={`conversations${i}`}
                    title={`Conversation with ${conversation.text}`}
                  >
                    with <em>{conversation.text}</em>
                    <br />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
