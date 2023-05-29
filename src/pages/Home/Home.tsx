import React from 'react';

import { BuyButton } from '../../components';
import { getBookByTitle } from '../../service'
import pilgrimBellCover from '../../images/pilgrim-bell.jpg';
import wolfCover from '../../images/calling-a-wolf-a-wolf-uk.jpg';
import spiritualVerseCover from '../../images/spiritual-verse.jpg';
import martyrCover from '../../images/martyr.jpg';

const spiritualVerse = getBookByTitle('The Penguin Book of Spiritual Verse')
const pilgrimBell = getBookByTitle('Pilgrim Bell');
const callingAWolfAWolf = getBookByTitle('Calling A Wolf A Wolf');
const martyr = getBookByTitle('Martyr!');

export const Home = () => {
  if (!pilgrimBell || !callingAWolfAWolf || !spiritualVerse || !martyr) {
    return null
  }

  return (
    <section>
      <div className="container">
      <article className="book">
          <div className="row">
          <div className="col-md-4 col-cover">
            <a
              href="https://www.penguinrandomhouse.com/books/734476/martyr-by-kaveh-akbar/"
              title={`Pre-order ${martyr.title}, out January 24`}
            >
              <img
                src={martyrCover}
                alt={martyr.title}
                className="img-fluid homepage-cover"
              />
            </a>
          </div>
          <div className="col-md-8 col-text">
            <h6 className="section-header">NEWS</h6>
            <h2 className="section-title">
              Pre-order <em>Martyr!</em>, out January 24
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <p>&ldquo;I can't remember the last time a book made me feel like this.&rdquo;<br/>-<strong>Clint Smith</strong></p>
                <p>&ldquo;Wise and wise-assed.&rdquo;<br />—<strong>Mary Karr</strong></p>
                <p>&ldquo;Brilliant and blistering alive.&rdquo;<br />—<strong>John Green</strong></p>
              </div>
              <div className="col-lg-6">
                <p>&ldquo;I haven't loved a book this much in years.&rdquo;<br/>-<strong>Tommy Orange</strong></p>
                <p>&ldquo;A fever dream, a reckoning, a heartbreak, a shattering and mending, a delight—its double-helix of dreams and conversation are now part of my own DNA.&rdquo;<br />—<strong>Leslie Jamison</strong></p>
                <p>&ldquo;The best novel you'll ever read about the joy of language addiction, displaceent, martyrdom, belonging, homesickness.&rdquo;<br />—<strong>Lauren Groff</strong></p>
              </div>
            </div>
            <BuyButton links={martyr.urls} title={`Order ${martyr.title} Online`} />
          </div>
        </div>
        </article>
        <article className="book">
          <div className="row">
          <div className="col-md-8 col-text">
            <h6 className="section-header">NEWS</h6>
            <h2 className="section-title">
              <em>PILGRIM BELL</em>
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <p>&ldquo;<em>Pilgrim Bell</em> is bracing in its honesty and noteworthy in its steadfast adherence to finding the spiritual in even the most mundane settings. Akbar's mesmerizing dexterity with language is at its most compelling when he is relentlessly pursuing the truth―a hunt that’s present in every poem in this volume.&rdquo;<br />—<strong><em>TIME</em></strong></p>
                <p>&ldquo;Akbar is exquisitely sensitive to how language can function as both presence and absence. . . . His practice of taking language apart, and harnessing the empty space around it, makes even the most familiar words seem eerie and unexpected.&rdquo;<br />—<strong><em>The New Yorker</em></strong></p>
              </div>
              <div className="col-lg-6">
                <p>&ldquo;Working at and along the outer edges of language, <em>Pilgrim Bell</em> calls us to attention and to attend to that which poetry and prayer share.&rdquo;<br />—<strong>M. NourbeSe Philip</strong></p>
                <p>&ldquo;Profound and singular, smart and sad and funny, but most of all truth's beauty and beauty's truth sung... We need <em>Pilgrim Bell</em>. We need Kaveh Akbar.&rdquo;<br />—<strong>Tommy Orange</strong></p>
                <p>&ldquo;<em>Pilgrim Bell</em> is destined to become a classic, another blazing torch added to the eternal flames.&rdquo;<br />—<strong>Mary Karr</strong></p>
                <p>&ldquo;<em>Pilgrim Bell</em> is a book that chooses honesty over beauty, which makes it a breathtaking text&rdquo;<br />—<strong>Hanif Abdurraqib</strong></p>
              </div>
            </div>
            <BuyButton links={pilgrimBell.urls} preorder={pilgrimBell.preorder} title={`Order ${pilgrimBell.title} Online`} />
          </div>
          <div className="col-md-4 col-cover">
            <a
              href="https://www.graywolfpress.org/books/pilgrim-bell"
              title={`Order ${pilgrimBell?.title} Online`}
            >
              <img
                src={pilgrimBellCover}
                alt={pilgrimBell?.title}
                className="img-fluid homepage-cover"
              />
            </a>
          </div>
        </div>
        </article>
        <article className="book">
          <div className="row">
          <div className="col-md-4 col-cover">
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
          <div className="col-md-8 col-text">
            <h6 className="section-header">NEWS</h6>
            <h2 className="section-title">
              <em>CALLING A WOLF A WOLF</em>
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
        <article className="book">
          <div className="row">
          <div className="col-md-8 col-text">
            <h6 className="section-header">NEWS</h6>
            <h2 className="section-title">
              <em>THE PENGUIN BOOK OF SPIRITUAL VERSE</em>
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <p>
                &ldquo;A profoundly valuable (and finely produced) collection, full of fresh perspective, and opening doors into all kinds of material that has been routinely neglected or patronized. Akbar's deeply personal framing of such a varied collection helps the reader pick up the threads of continuity through immense cultural diversities, without reducing any of these texts to blandness.&rdquo;<br/>-<em><strong>The Times Literary Supplement</strong></em>

                </p>
                <p>&ldquo;A delightful celebration of human creativity, with new insights from a trusted guide: Kaveh Akbar.&rdquo;<br />—<strong>Chine McDonald</strong></p>
              </div>
              <div className="col-lg-6">
                <p>&ldquo;There cannot be any other anthology that ranges so widely.&rdquo;<br />—<strong>John Barton</strong></p>
                <p>
                  &ldquo;The chorus of voices gathered offer a balm, a consolation, a tune, in our desolate world.&rdquo;<br />—
                  <strong>Ilya Kaminsky</strong>
                </p>
                <p>
                  &ldquo;Vibrating across this thick bundle of verse is the animation of the spirit enmeshed with the body, astounding in its ever-shifting forms, its irrepressible music.&rdquo;
                  <br />—
                  <strong>Jenny Xie</strong>
                </p>
              </div>
            </div>
            <BuyButton links={spiritualVerse.urls} title={`Order ${spiritualVerse.title} Online`} />
          </div>
          <div className="col-md-4 col-cover">
            <a
              href="https://www.alicejamesbooks.org/bookstore/calling-a-wolf-a-wolf#:~:text=Kaveh%20Akbar\'s%20poems%20appear,Alcoholic%2C%20published%20by%20Sibling%20Rivalry"
              title={`Order ${spiritualVerse.title} Online`}
            >
              <img
                src={spiritualVerseCover}
                alt={spiritualVerse.title}
                className="img-fluid homepage-cover"
              />
            </a>
          </div>
        </div>
        </article>
      </div>
    </section>
  );
}
