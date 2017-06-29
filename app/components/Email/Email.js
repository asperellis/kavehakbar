var React = require('react');
require('./email.css');

function Email () {
  const formStyles = {
    position: 'absolute',
    left: '-5000px'
  };

  return(
    <div id="mc_embed_signup">
      <form action="//kavehakbar.us16.list-manage.com/subscribe/post?u=99e2563c52ba2637d3b8bbfbd&amp;id=1fe0e9a512" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>   
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL">SUBSCRIBE TO KAVEH'S <br/>EMAIL LIST</label>
          <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" required />
          <div style={formStyles} aria-hidden="true">
            <input type="text" name="b_99e2563c52ba2637d3b8bbfbd_1fe0e9a512" tabIndex="-1" value="" />
          </div>
          <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">SUBSCRIBE</button>
        </div>
      </form>
    </div>
  )
}

module.exports = Email; 
 
