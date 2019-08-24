import React from 'react';
import { words } from './../content/content';

function Words() {
  return (
    <section className="words">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <blockquote>
              &ldquo;
              {'Akbar is a sumptuous, remarkably painterly poet.'}
              &rdquo;
              <br />
              <span className="italic">{'- The Kenyon Review'}</span>
            </blockquote>
          </div>
          <div className="col-md-8">
            <h6 className="section-header">{'SELECTED ONLINE POEMS'}</h6>
            {words.online.map((w, i) => {
              return (
                <p key={'online' + i}>
                  <a href={w.url} title={'Read ' + w.title}>
                    {w.title}
                  </a>
                  <em>{', ' + w.publication}</em>
                </p>
              );
            })}
            <h6 className="section-header">{'REVIEWS'}</h6>
            {words.reviews.map((r, i) => {
              return (
                <p key={'reviews' + i}>
                  <em>{r.title}</em>
                  <br />
                  {r.reviews.map((rr, ind) => {
                    return (
                      <a
                        href={rr.url}
                        title={
                          r.title + ' ' + rr.title + ' in ' + rr.publication
                        }
                        key={rr.publication.replace(/\s/g, '') + ind}
                      >
                        {rr.title}
                        <em>{rr.publication}</em>
                        <br />
                      </a>
                    );
                  })}
                </p>
              );
            })}
            <h6 className="section-header">{'CONVERSATIONS'}</h6>
            <p>
              {words.conversations.map((c, i) => {
                return (
                  <a
                    href={c.url}
                    key={'conversations' + i}
                    title={'Conversation with ' + c.with}
                  >
                    {'with '}
                    <em>{c.with}</em>
                    <br />
                  </a>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

module.exports = Words;
