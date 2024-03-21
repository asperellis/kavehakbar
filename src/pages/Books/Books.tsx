import React from "react";

import { BuyButton } from "../../components";
import { getBooks } from "../../service";

import callingAWolfAWolfCover from "../../images/calling-a-wolf-a-wolf.jpg";
import portaitOfTheAlcoholicCover from "../../images/portait-of-the-alcoholic.jpg";
import pilgrimBellCover from "../../images/pilgrim-bell.jpg";
import spiritualVerseCover from "../../images/spiritual-verse.jpg";
import martyrCover from "../../images/martyr.jpg";
import anotherLastCallCover from "../../images/another-last-call.jpg";

const COVERS: Record<string, string> = {
  "calling-a-wolf-a-wolf": callingAWolfAWolfCover,
  "portait-of-the-alcoholic": portaitOfTheAlcoholicCover,
  "pilgrim-bell": pilgrimBellCover,
  "spiritual-verse": spiritualVerseCover,
  martyr: martyrCover,
  "another-last-call": anotherLastCallCover,
};

export const Books = () => (
  <section className="books">
    <div className="container">
      <div className="row">
        {getBooks().map((book) => (
          <div className={"col-lg-4 col-md-6"} key={book.title}>
            <div className="book d-flex flex-column">
              <a href={book.urls[0].url} title={`Order ${book.title}`}>
                <img
                  src={COVERS[book.img]}
                  alt={book.title}
                  className="img-fluid book-cover"
                />
              </a>
              <h6 className="book-header">{book.type || "BOOK"}</h6>
              <h4 className="book-title">
                <em>{book.title.toUpperCase()}</em>
              </h4>
              <div className="book-quotes">
                {book.quotes.map((q, index) => (
                  <p
                    className="book-quote"
                    key={`${book.title.replace(/\s/g, "")}q${index}`}
                  >
                    &ldquo;
                    <span dangerouslySetInnerHTML={{ __html: q.quote }}></span>
                    &rdquo;
                    <br />-{q.speaker && ` ${q.speaker}`}
                    {q.publication && " in "}
                    {q.publication && <em>{q.publication}</em>}
                  </p>
                ))}
              </div>
              <BuyButton
                links={book.urls}
                preorder={book.preorder}
                title={`Order ${book.title} Online`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
