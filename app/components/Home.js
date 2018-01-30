import React from 'react';
import wolfCover from './../images/calling-a-wolf-a-wolf.jpg';

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
              <br />
              {'OUT NOW'}
            </h2>
            <p>
              &ldquo;{
                'A breathtaking addition to the canon of addiction literature.'
              }&rdquo;<br />-<em>{'Publishers Weekly'}</em> {'Starred Review'}
            </p>
            <p>
              &ldquo;{
                'Kaveh Akbar has evolved a poetics that (often) suggests the infinite within each object, gesture, event. The smallest thing in these poems pushes one up against something intractable and profound. Surface and depth constantly turn into each other. Narrative, the dilemmas of personal history and anguish are handled with equal sophistication. ‘Odd, for an apocalypse to announce itself with such bounty.’ This is bounty, an intensely inventive and original debut.'
              }&rdquo;<br />-{'Frank Bidart'}
            </p>
            <p>
              &ldquo;{
                'Akbar’s mind, like his language, is perpetually in motion. His imagery— wounded and resplendent—is masterful and his syntax ensnares and releases music that’s both delicate and muscular. Kaveh Akbar has crafted one of the best debuts in recent memory. In his hands, awe and redemption hinge into unforgettable and gorgeous poems.'
              }&rdquo;<br />
              {'- Eduardo C. Corral'}
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

module.exports = Home;
