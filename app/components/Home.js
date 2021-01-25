import React from 'react';
import wolfCover from './../images/calling-a-wolf-a-wolf-uk.jpg';
import featuredLogos from './../images/featured-logos.gif';
import pilgrimBellCover from './../images/pilgrim-bell.png';

function Home() {
  return (
    <section>
      <div className="container">
        <article className="book">
          <div className="row">
          <div className="col-md-8">
            <h6 className="section-header">NEWS</h6>
            <h2 className="section-title">
              PRE-ORDER <em>PILGRIM BELL</em>
            </h2>
            <div className="row">
              <div className="col-lg-12">
                <p>&ldquo;There is much that can be said about Kaveh Akbar’s commitment to a sprawling and touchable image, or a line that breaks at the perfect moment. But what thrilled me most about this book was another commitment: the commitment to writing discomfort, or ugliness. Doing it well, and doing it without insisting upon beautification. <em>Pilgrim Bell</em> is a book that chooses honesty over beauty, which makes it a breathtaking text.&rdquo;<br />—<strong>Hanif Abdurraqib</strong></p>
                <p>&ldquo;Kaveh Akbar is truly a great writer, and his new collection <em>Pilgrim Bell</em> is a marvel. Like his previous work, it dazzles us. Akbar is an unlikely prophet—hilarious and irreverent and self-deprecating. Yet even nonbelievers will travel the circles of faith and hellscape, love and rebuke, through his captivating voice. He is incapable of setting down a line that’s less than luminous. <em>Pilgrim Bell</em> is destined to become a classic, another blazing torch added to the eternal flames.&rdquo;<br />—<strong>Mary Karr</strong></p>
              </div>
            </div>
            <a
              href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678"
              className="button"
              title="Order Calling A Wolf A Wolf Online"
            >
              ORDER ONLINE
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678"
              title="Pre-Order Pilgrim Bell Online"
            >
              <img
                src={pilgrimBellCover}
                alt="Pilgrim Bell"
                className="img-fluid homepage-cover"
              />
            </a>
          </div>
        </div>
        </article>
        <article className="book">
          <div className="row">
          <div className="col-md-4">
            <a
              href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678"
              title="Order Calling A Wolf A Wolf Online"
            >
              <img
                src={wolfCover}
                alt="Calling A Wolf A Wolf"
                className="img-fluid homepage-cover"
              />
            </a>
          </div>
          <div className="col-md-8">
            <h6 className="section-header">NEWS</h6>
            <h2 className="section-title">
              <em>CALLING A WOLF A WOLF</em> OUT NOW
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <p>&ldquo;An outstanding book of poetry... unknowable and always beautiful&rdquo;<br />—<strong>Roxane Gay</strong></p>
                <p>&ldquo;This is bounty, an intensely inventive and original debut.&rdquo;<br />—<strong>Frank Bidart</strong></p>
                <p>&ldquo;Truly brilliant.&rdquo;<br />—<strong>John Green</strong></p>
                <p>&ldquo;Akbar has what every poet needs: the power to make, from emotions others have felt, memorable language nobody has assembled before.&rdquo;<br />—
                  <strong>Stephanie Burt, <em>Yale Review</em></strong>
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  &ldquo;A bright flash of lightning illuminating the landscape of craving.&rdquo;<br />
                  <strong>Leslie Jamison, <em>The Guardian</em></strong>
                </p>
                <p>
                  &ldquo;One of the best debuts in recent memory.&rdquo;
                  <br />
                  <strong>Eduardo C. Corral</strong>
                </p>
                <p>
                  &ldquo;A breathtaking addition to the canon of addiction literature.&rdquo;
                  <br />—<strong><em>Publishers Weekly</em> (Starred Review)</strong>
                </p>
                <p>
                  &ldquo;Akbar proves what books can do.&rdquo;
                  <br />—
                  <strong>
                    <em>Library Journal</em>
                     (Starred Review)
                  </strong>
                </p>
                <p>
                  &ldquo;Immensely thoughtful... terrifyingly cogent.&rdquo;
                  <br />—
                  <strong>
                    <em>The Atlantic</em>
                  </strong>
                </p>
              </div>
            </div>
            <a
              href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678"
              className="button"
              title="Order Calling A Wolf A Wolf Online"
            >
              ORDER ONLINE
            </a>
          </div>
        </div>
        </article>
        <aside>
          <div className="row">
            <div className="col-md-12">
              <h6 className="section-header featured-logos">
                POEMS AND PRAISE FEATURED IN
              </h6>
              <img
                src={featuredLogos}
                alt="Poems and praise featured in The New Yorker, Boston Review, NPR, The New York Times, The Atlantic, Interview, BuzzFeed, PBS News Hour, POETRY and The Wall Street Journal"
                className="img-fluid featured-logos-img"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Home;
