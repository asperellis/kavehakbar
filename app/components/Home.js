var React = require('react');
var WolfCover = require('./../images/calling-a-wolf-a-wolf.jpg');

function Home () {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={WolfCover} alt="Calling A Wolf A Wolf" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h6 className="section-header">{'NEWS'}</h6>
            <h2 className="section-title"><em>{'CALLING A WOLF A WOLF'}</em><br/>{'COMING SOON'}</h2>
            <p>&ldquo;{'The struggle from late youth on, with and without God, agony, narcotics and love is a torment rarely recorded with such sustained eloquence and passion as you will find in this collection.'}&rdquo;<br/>-{'Fanny Howe'}</p>
            <p>
              	&ldquo;{'Akbar’s mind, like his language, is perpetually in motion. His imagery— wounded and resplendent—is masterful and his syntax ensnares and releases music that’s both delicate and muscular. Kaveh Akbar has crafted one of the best debuts in recent memory. In his hands, awe and redemption hinge into unforgettable and gorgeous poems.'}&rdquo;<br/>{'- Eduardo C. Corral'}
            </p>
            <a href="https://www.amazon.com/Calling-Wolf-Kaveh-Akbar/dp/1938584678" className="button" title="Order Calling A Wolf A Wolf Online">{'ORDER ONLINE'}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

module.exports = Home;