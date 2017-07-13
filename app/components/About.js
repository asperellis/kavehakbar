var React = require('react');
var AboutImg = require('./../images/kaveh.jpg');

function About () {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={AboutImg} alt="Kaveh Akbar" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h6 className="section-header">{'ABOUT KAVEH'}</h6>
            <p>{'Kaveh Akbar’s poems appear recently or soon in '}<em>{'The New Yorker, Poetry, Tin House, Ploughshares, FIELD, Georgia Review, PBS NewsHour, Harvard Review, American Poetry Review, Narrative, The Poetry Review, AGNI, New England Review, A Public Space, Prairie Schooner, Virginia Quarterly Review, Poetry International, Best New Poets 2016, Guernica, Boston Review,'}</em> {'and elsewhere. His debut full-length collection, '}<a href="http://alicejamesbooks.org/ajb-titles/calling-a-wolf-a-wolf/" title="Calling A Wolf A Wolf"><em>{'Calling a Wolf a Wolf'}</em></a>, {'is forthcoming with Alice James Books in Fall 2017, and his chapbook, '}<a href="http://siblingrivalrypress.bigcartel.com/product/portrait-of-the-alcoholic-by-kaveh-akbar" title="Portrait of the Alcoholic"><em>{'Portrait of the Alcoholic'}</em></a>{', is out with Sibling Rivalry Press. The recipient of a 2016 Ruth Lilly and Dorothy Sargent Rosenberg Fellowship from the Poetry Foundation, a Pushcart Prize, and the Lucille Medwick Memorial Award from the Poetry Society of America, Kaveh was born in Tehran, Iran, and currently lives and teaches in Florida.'}</p>
            <p>{'Kaveh founded and edits '}<a href="http://www.divedapper.com/" title="Divedapper"><em>{'Divedapper'}</em></a>{', a home for dialogues with the most vital voices in contemporary poetry. Previously, he ran '}<em><a href="http://www.thequirk.org/" title="The Quirk">{'The Quirk'}</a></em>{', a for-charity print literary journal. He has also served as Poetry Editor for '}<em><a href="http://booth.butler.edu/" title="Booth">{'BOOTH'}</a></em>{' and Book Reviews Editor for the '}<em><a href="http://southeastreview.org/" title="Southeast Review">{'Southeast Review'}</a></em>{'. Along with Gabrielle Calvocoressi, francine j. harris, and Jonathan Farmer, he starred on '}<a href="http://allupinyourears.com/" title="All Up In Your Ears Podcast">{'All Up in Your Ears'}</a>{', a monthly poetry podcast.'}</p>
            <p><span className="bold">{'CONTACT'}</span>: <a href="mailto:kaveh@kavehakbar.com" title="Send an email to Kaveh">{'kaveh@kavehakbar.com'}</a>{' or on Twitter '}<a href="https://twitter.com/KavehAkbar" title="Follow Kaveh on Twitter">{'@KavehAkbar'}</a>.
            <br /><span className="bold">{'SPEAKING AGENT'}</span>{': Tabia Yapp, '}<a href="mailto:t@beotis.com" title="Booking Contact for Kaveh">{'t@beotis.com'}</a>
            </p>
            <p>{'Author Photo By B. A. Van Sise'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

module.exports = About;