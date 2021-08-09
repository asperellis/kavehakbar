import React from 'react';
import {books} from './../content/content';
import BuyButton from './BuyButton/BuyButton';
import wolfCover from './../images/calling-a-wolf-a-wolf-uk.jpg';
import featuredLogos from './../images/featured-logos.gif';
import pilgrimBellCover from './../images/pilgrim-bell.jpg';

const getBook = (title) => books.find(b => b.title === title);
const pilgrimBell = getBook('Pilgrim Bell');
const callingAWolfAWolf = getBook('Calling A Wolf A Wolf');

function Home() {
  return (
    <section>
      <div className="container">
        <article className="book">
          <div className="row">
          <div className="col-md-8">
            <h6 className="section-header">NEWS</h6>
            <h2 className="section-title">
              <em>PILGRIM BELL</em> OUT NOW!
            </h2>
            <div className="row">
              <div className="col-lg-12">
                <p>&ldquo;<em>Pilgrim Bell</em> is bracing in its honesty and noteworthy in its steadfast adherence to finding the spiritual in even the most mundane settings. Akbar’s mesmerizing dexterity with language is at its most compelling when he is relentlessly pursuing the truth―a hunt that’s present in every poem in this volume.&rdquo;<br />—<strong><em>TIME</em></strong></p>
                <p>&ldquo;Akbar is exquisitely sensitive to how language can function as both presence and absence. . . . His practice of taking language apart, and harnessing the empty space around it, makes even the most familiar words seem eerie and unexpected.&rdquo;<br />—<strong><em>The New Yorker</em></strong></p>
                <p>&ldquo;Working at and along the outer edges of language, <em>Pilgrim Bell</em> calls us to attention and to attend to that which poetry and prayer share.&rdquo;<br />—<strong>M. NourbeSe Philip</strong></p>
                <p>&ldquo;Profound and singular, smart and sad and funny, but most of all truth’s beauty and beauty’s truth sung... We need <em>Pilgrim Bell</em>. We need Kaveh Akbar.&rdquo;<br />—<strong>Tommy Orange</strong></p>
                <p>&ldquo;<em>Pilgrim Bell</em> is destined to become a classic, another blazing torch added to the eternal flames.&rdquo;<br />—<strong>Mary Karr</strong></p>
                <p>&ldquo;<em>Pilgrim Bell</em> is a book that chooses honesty over beauty, which makes it a breathtaking text&rdquo;<br />—<strong>Hanif Abdurraqib</strong></p>
              </div>
            </div>
            <BuyButton links={pilgrimBell.urls} preorder={pilgrimBell.preorder} title={`Order ${pilgrimBell.title} Online`} />
          </div>
          <div className="col-md-4">
            <a
              href="https://www.graywolfpress.org/books/pilgrim-bell"
              title={`Order ${pilgrimBell.title} Online`}
            >
              <img
                src={pilgrimBellCover}
                alt={pilgrimBell.title}
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
              href="https://www.alicejamesbooks.org/bookstore/calling-a-wolf-a-wolf#:~:text=Kaveh%20Akbar\'s%20poems%20appear,Alcoholic%2C%20published%20by%20Sibling%20Rivalry"
              title={`Order ${callingAWolfAWolf.title} Online`}
            >
              <img
                src={wolfCover}
                alt={callingAWolfAWolf.title}
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
            <BuyButton links={callingAWolfAWolf.urls} title={`Order ${callingAWolfAWolf.title} Online`} />
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
