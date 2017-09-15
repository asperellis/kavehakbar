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
              <a href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678" title="Order Calling A Wolf A Wolf"><img src={WolfCover} alt="Calling A Wolf A Wolf" className="img-fluid book-cover" /></a>
              <h6 className="book-header">{'BOOK'}</h6>
              <h4 className="book-title"><em>{'CALLING A WOLF A WOLF'}</em></h4>
              <p className="book-quote">&ldquo;{'A breathtaking addition to the canon of addiction literature.'}&rdquo;<br/>{'-'}<em>{' Publishers Weekly'}</em>{' Starred Review'}</p>
              <p className="book-quote">&ldquo;{'Akbar proves what books can do in his exceptional debut, which brings us along on his struggle with addiction, a dangerous comfort and soul-eating monster he addresses boldly.'}&rdquo;<br/>{'-'}<em>{' Library Journal'}</em>{' Starred Review'}</p>
              <p className="book-quote">&ldquo;{'Akbar has what every poet needs: the power to make, from emotions that others have felt, memorable language that nobody has assembled before.'}&rdquo;<br/>{'- Steph Burt in '}<em>{'The Yale Review'}</em></p>
              <a href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678" className="button" title="Order Calling A Wolf A Wolf">{'ORDER ONLINE'}</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="book d-flex flex-column">
              <a href="https://www.amazon.com/Portrait-Alcoholic-Kaveh-Akbar/dp/1943977275" title="Order Portrait of the Alcoholic"><img src={PortraitCover} alt="Portrait of the Alcoholic" className="img-fluid book-cover" /></a>
              <h6 className="book-header">{'CHAPBOOK'}</h6>
              <h4 className="book-title"><em>{'PORTRAIT OF THE ALCOHOLIC'}</em></h4>
              <p className="book-quote">&ldquo;{'Kaveh Akbar has written one of the best books of poetry I\'ve ever read.'}&rdquo;<br/>{'- Patricia Smith'}</p>
              <p className="book-quote">&ldquo;{'Was it Jung who speculated that alcoholism might be an attempt at a material solution for a spiritual problem? Kaveh Akbar seems able to contain both--he\'s a demotic, as well as a spiritual, poet (the only type of either I trust). Each word in this little book might rise up from somewhere deep in the earth, but they turn into stars.'}&rdquo;<br/>{'- Nick Flynn'}</p>
              <a href="https://www.amazon.com/Portrait-Alcoholic-Kaveh-Akbar/dp/1943977275" className="button">{'ORDER ONLINE'}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

module.exports = Books;