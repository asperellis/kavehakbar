import React from 'react';
import aboutImg from './../images/kaveh.jpg';
import { about } from './../content/content';

function About() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={aboutImg} alt="Kaveh Akbar" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h6 className="section-header">{'ABOUT KAVEH'}</h6>
            <p>
              {'Kaveh Akbar’s poems appear in '}
              <em>
                {
                  'The New Yorker, Poetry, The New York Times, Paris Review, The Nation, Best American Poetry, The New Republic, The Guardian, American Poetry Review, The Poetry Review, PBS NewsHour, '
                }
              </em>{' '}
              {'and elsewhere. His debut full-length collection, '}
              <a
                href="http://alicejamesbooks.org/ajb-titles/calling-a-wolf-a-wolf/"
                title="Calling A Wolf A Wolf"
              >
                <em>{'Calling a Wolf a Wolf'}</em>
              </a>
              ,{' '}
              {
                'is out with Alice James in the US and Penguin in the UK, and his chapbook, '
              }
              <a
                href="http://siblingrivalrypress.bigcartel.com/product/portrait-of-the-alcoholic-by-kaveh-akbar"
                title="Portrait of the Alcoholic"
              >
                <em>{'Portrait of the Alcoholic'}</em>
              </a>
              {
                ', was published by Sibling Rivalry Press. The recipient of honors including a Ruth Lilly and Dorothy Sargent Rosenberg Fellowship from the Poetry Foundation, a Pushcart Prize, the Levis Reading Prize, and a Lucille Medwick Memorial Award from the Poetry Society of America, Kaveh was born in Tehran, Iran, and teaches at Purdue University and in the low residency MFA programs at Randolph College and Warren Wilson.'
              }
            </p>
            <p>
              {'Kaveh founded '}
              <a href="http://www.divedapper.com/" title="Divedapper">
                <em>{'Divedapper'}</em>
              </a>
              {
                ', a home for dialogues with the most vital voices in American poetry. With Sarah Kay and Claire Schwartz, he writes a weekly column for the '
              }
              <em>{'Paris Review'}</em>
              {' called '}
              <a href="https://www.theparisreview.org/blog/category/columns/poetry-rx/">
                {'"Poetry RX."'}
              </a>
              {' Previously, he ran '}
              <em>
                <a href="http://www.thequirk.org/" title="The Quirk">
                  {'The Quirk'}
                </a>
              </em>
              {
                ', a for-charity print literary journal. He has also served as Poetry Editor for '
              }
              <em>
                <a href="http://booth.butler.edu/" title="Booth">
                  {'BOOTH'}
                </a>
              </em>
              {' and Book Reviews Editor for the '}
              <em>
                <a href="http://southeastreview.org/" title="Southeast Review">
                  {'Southeast Review'}
                </a>
              </em>
              {
                '. Along with Gabrielle Calvocoressi, francine j. harris, and Jonathan Farmer, he starred on '
              }
              <a
                href="http://allupinyourears.com/"
                title="All Up In Your Ears Podcast"
              >
                {'All Up in Your Ears'}
              </a>
              {', a monthly poetry podcast.'}
            </p>
            <p>
              <span className="bold">{'SPEAKING/GENERAL INQUIRIES'}</span>:{' '}
              <a
                href="https://www.beotis.com/contact/"
                title="General Inquiries or booking requests for Kaveh"
              >
                {'Beotis Creative'}
              </a>
              <br />
              <span className="bold">{'LITERARY'}</span>
              {': '}
              <a
                href="http://www.wylieagency.com/"
                title="Literary Agent for Kaveh"
              >
                {'The Wylie Agency'}
              </a>
            </p>
            <p>{'Author Photo By Hieu Minh Nguyen'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

module.exports = About;
