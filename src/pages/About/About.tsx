import React from 'react';
import aboutImg from '../../images/kaveh.jpg'; 

export const About = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={aboutImg} alt="Kaveh Akbar" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h6 className="section-header">ABOUT KAVEH</h6>

          <p>Kaveh Akbar's poems appear in <em>The New Yorker, The New York Times, Paris Review, Best American Poetry</em>, and elsewhere. He is the author of two poetry collections: <a href="https://www.graywolfpress.org/books/pilgrim-bell"><em>Pilgrim Bell</em></a> (Graywolf 2021) and <a href="http://alicejamesbooks.org/ajb-titles/calling-a-wolf-a-wolf/" title="Calling A Wolf A Wolf"><em>Calling a Wolf a Wolf</em></a> (Alice James 2017), in addition to a chapbook, <a href="http://siblingrivalrypress.bigcartel.com/product/portrait-of-the-alcoholic-by-kaveh-akbar" title="Portrait of the Alcoholic"><em>Portrait of the Alcoholic</em></a> (Sibling Rivalry 2016). He is also the editor of <a href='https://www.penguin.co.uk/books/312973/the-penguin-book-of-spiritual-verse/9780241391587' title='The Penguin Book of Spiritual Verse: 100 Poets on the Divine'><em>The Penguin Book of Spiritual Verse: 100 Poets on the Divine</em></a> (Penguin Classics 2022). In 2024, Knopf will publish <em>Martyr!</em>, Kaveh's first novel.
          </p>
          <p>
            In 2020 Kaveh was named Poetry Editor of <a href="https://www.thenation.com/content/poems/"><em>The Nation</em></a>. The recipient of honors including multiple Pushcart Prizes, a Civitella Ranieri Foundation Fellowship, and the Levis Reading Prize, Kaveh was born in Tehran, Iran, and teaches at the University of Iowa and in the low-residency MFA programs at Randolph College and Warren Wilson. In 2014, Kaveh founded <a href="http://www.divedapper.com/" title="Divedapper"><em>Divedapper</em></a>, a home for dialogues with the most vital voices in American poetry. With Sarah Kay and Claire Schwartz, he wrote a weekly column for the <em>Paris Review</em> called <a href="https://www.theparisreview.org/blog/category/columns/poetry-rx/">"Poetry RX."</a>
          </p>
          <p>
            <span className="bold">SPEAKING/GENERAL INQUIRIES</span>: <a href="https://www.beotis.com/contact/" title="General Inquiries or booking requests for Kaveh">Beotis Creative</a>
            <br />
            <span className="bold">LITERARY</span>: <a href="http://www.wylieagency.com/" title="Literary Agent for Kaveh">The Wylie Agency</a>
          </p>
          <p>Author Photo By Hieu Minh Nguyen</p>
        </div>
      </div>
    </div>
  </section>
)
