import React from 'react';
import wolfCover from './../images/calling-a-wolf-a-wolf.jpg';
import featuredLogos from './../images/featured-logos.gif';

function Home() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a
              href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678"
              title="Order Calling A Wolf A Wolf Online"
            >
              <img
                src={wolfCover}
                alt="Calling A Wolf A Wolf"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="col-md-8">
            <h6 className="section-header">{'NEWS'}</h6>
            <h2 className="section-title">
              <em>{'CALLING A WOLF A WOLF'}</em>
              {' OUT NOW'}
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <p>
                  &ldquo;{
                    'An outstanding book of poetr... unknowable and always beautiful.'
                  }&rdquo;<br />- {'Roxane Gay'}
                </p>
                <p>
                  &ldquo;{
                    'This is bounty, an intensely inventive and original debut.'
                  }&rdquo;<br />- {'Frank Bidart'}
                </p>
                <p>
                  &ldquo;{'Truly brilliant.'}&rdquo;<br />- {'John Green'}
                </p>
                <p>
                  &ldquo;{
                    'Akbar has what every poet needs: the power to make, from emotions others have felt, memorable language nobody has assembled before'
                  }&rdquo;<br />- {'Steph Burt'}
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  &ldquo;{'One of the best debuts in recent memory.'}&rdquo;<br />-{' '}
                  {'Eduardo C. Corral'}
                </p>
                <p>
                  &ldquo;{
                    'A breathtaking addition to the canon of addiction literature.'
                  }&rdquo;<br />- <em>{'Publishers Weekly'}</em>
                  {'(Starred Review)'}
                </p>
                <p>
                  &ldquo;{'Akbar proves what books can do.'}&rdquo;<br />-{' '}
                  <em>{'Library Journal'}</em>
                  {'(Starred Review)'}
                </p>
                <p>
                  &ldquo;{'Immensely thoughtful... terrifyingly cogent.'}&rdquo;<br />-{' '}
                  <em>{'The Atlantic'}</em>
                </p>
                <p>
                  &ldquo;{'Akbar is a sumptuous, remarkably painterly poet.'}&rdquo;<br />-{' '}
                  <em>{'The Kenyon Review'}</em>
                </p>
              </div>
            </div>

            <a
              href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678"
              className="button"
              title="Order Calling A Wolf A Wolf Online"
            >
              {'ORDER ONLINE'}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h6 className="section-header featured-logos">
              {'POEMS AND PRAISE FEATURED IN'}
            </h6>
            <img
              src={featuredLogos}
              alt="Poems and praise featured in The New Yorker, Boston Review, NPR, The New York Times, The Atlantic, Interview, BuzzFeed, PBS News Hour, POETRY and The Wall Street Journal"
              className="img-fluid featured-logos-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

module.exports = Home;
