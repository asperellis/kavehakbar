import React from "react";
import aboutImg from "../../images/kaveh.jpg";

export const About = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={aboutImg} alt="Kaveh Akbar" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h6 className="section-header">ABOUT KAVEH</h6>

          <p>
            Kaveh Akbar is the <em>New York Times</em> bestselling author of the
            novel{" "}
            <a href="https://www.penguinrandomhouse.com/books/734476/martyr-by-kaveh-akbar/">
              <em>Martyr!</em>
            </a>
            —a finalist for the National Book Award and one of the{" "}
            <em>New York Times</em> Ten Best Books of the Year—and two books of
            poetry:{" "}
            <a href="https://www.amazon.com/Pilgrim-Bell-Poems-Kaveh-Akbar/dp/1644450593/ref=sr_1_1?crid=9T045KO8TY0O&keywords=Pilgrim+Bell&qid=1661542344&sprefix=pilgrim+bell%2Caps%2C178&sr=8-1">
              <em>Pilgrim Bell</em>
            </a>{" "}
            and{" "}
            <a href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678/ref=sr_1_1?crid=1HTYNCYWNO3TE&keywords=Calling+a+Wolf+a+Wolf&qid=1661542492&sprefix=calling+a+wolf+a+wolf%2Caps%2C116&sr=8-1">
              <em>Calling a Wolf a Wolf</em>
            </a>
            . He is also the author of a chapbook,{" "}
            <a href="https://www.amazon.com/Portrait-Alcoholic-Kaveh-Akbar/dp/1943977275/ref=sr_1_1?crid=ER8SF9L5ZFK4&keywords=Portrait+of+the+Alcoholic&qid=1661542537&sprefix=portrait+of+the+alcoholic%2Caps%2C83&sr=8-1">
              <em>Portrait of the Alcoholic</em>
            </a>{" "}
            and editor of{" "}
            <a href="https://www.amazon.com/Penguin-Spiritual-Divine-Classics-anglais/dp/024139158X/ref=sr_1_1?crid=IQ6CTTMNUEZ2&keywords=The+Penguin+Book+of+Spiritual+Verse%3A+110+Poets+on+the+Divine&qid=1661542591&sprefix=the+penguin+book+of+spiritual+verse+110+poets+on+the+divine%2Caps%2C87&sr=8-1">
              <em>
                The Penguin Book of Spiritual Verse: 110 Poets on the Divine
              </em>
            </a>{" "}
            and, with Paige Lewis, co-editor of{" "}
            <a href="https://www.sarabandebooks.org/all-titles/p/another-last-call-poems-on-addiction-deliverance-edited-by-kaveh-akbar-and-paige-lewis">
              <em>Another Last Call: Poems on Addiction and Deliverance</em>
            </a>
            .
          </p>
          <p>
            Kaveh is the recipient of fellowships from the John Simon Guggenheim
            Memorial Foundation, Poetry Foundation, Civitella Ranieri, and
            elsewhere, and has been awarded the American Academy of Arts and
            Letters Rosenthal Family Foundation Award, the Brooklyn Public
            Library Book Prize, the Levis Reading Prize, multiple Pushcart
            Prizes, and named one of the TIME 100 Next.
          </p>
          <p>
            Kaveh's writing appears in the <em>New Yorker</em>, the{" "}
            <em>New York Times</em>, <em>Paris Review</em>,{" "}
            <em>New Republic</em>, <em>GQ</em>, <em>The Atlantic</em>,{" "}
            <em>Best American Poetry</em>, <em>Best American Sportswriting</em>,
            and elsewhere. He was the founding editor of{" "}
            <a href="http://www.divedapper.com/" title="Divedapper">
              <em>Divedapper</em>
            </a>
            , and since 2020, has served as poetry editor for{" "}
            <em>The Nation</em>. Born in Tehran, Iran, Kaveh is the Roy J.
            Carver Professor of English at the University of Iowa. His work has
            been translated into over thirty languages.
          </p>
          <p>
            <span className="bold">SPEAKING/GENERAL INQUIRIES</span>:{" "}
            <a
              href="mailto:kevin@tuesdayagency.com"
              title="General Inquiries or booking requests for Kaveh"
            >
              The Tuesday Agency
            </a>
            <br />
            <span className="bold">LITERARY</span>:{" "}
            <a
              href="http://www.wylieagency.com/"
              title="Literary Agent for Kaveh"
            >
              The Wylie Agency
            </a>
          </p>
          <p>Author Photo By Beowulf Sheehan</p>
        </div>
      </div>
    </div>
  </section>
);
