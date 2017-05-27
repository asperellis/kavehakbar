var React = require('react');
var WolfCover = require('./../images/calling-a-wolf-a-wolf.jpg');
var PortraitCover = require('./../images/portait-of-the-alcoholic.jpg');

function Books () {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 offset-lg-2">
            <div className="book d-flex flex-column">
              <img src={WolfCover} alt="Calling A Wolf A Wolf" className="img-fluid book-cover" />
              <h6 className="book-header">BOOK</h6>
              <h4 className="book-title"><em>CALLING A WOLF A WOLF</em></h4>
              <p className="book-quote">&ldquo;The struggle from late youth on, with and without God, agony, narcotics and love is a torment rarely recorded with such sustained eloquence and passion as you will find in this collection.&rdquo;<br/>-Fanny Howe</p>
              <a href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678" className="button">ORDER ONLINE</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="book d-flex flex-column">
              <img src={PortraitCover} alt="Portrait of the Alcoholic" className="img-fluid book-cover" />
              <h6 className="book-header">CHAPBOOK</h6>
              <h4 className="book-title"><em>PORTRAIT OF THE ALCOHOLIC</em></h4>
              <p className="book-quote">&ldquo;Kaveh Akbar has written one of the best books of poetry I've ever read.&rdquo;<br/>- Patricia Smith</p>
              <a href="https://www.amazon.com/Portrait-Alcoholic-Kaveh-Akbar/dp/1943977275" className="button">ORDER ONLINE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

module.exports = Books;