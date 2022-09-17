import React from 'react';

import * as classes from './email.module.css';

export const Email = () => (
  <div id="mc_embed_signup" className={classes.emailForm}>
    <form
      action="//kavehakbar.us16.list-manage.com/subscribe/post?u=99e2563c52ba2637d3b8bbfbd&amp;id=1fe0e9a512"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className='validate'
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll" className={classes.emailFormScroll}>
        <label htmlFor="mce-EMAIL">
          SUBSCRIBE TO KAVEH'S EMAIL LIST
        </label>
        <input
          type="email"
          name="EMAIL"
          className={classes.email}
          id="mce-EMAIL"
          placeholder="EMAIL ADDRESS"
          required
        />
        <div style={{ left: '-5000px', position: 'absolute' }} aria-hidden="true">
          <input
            type="text"
            name="b_99e2563c52ba2637d3b8bbfbd_1fe0e9a512"
            tabIndex={-1}
            value=""
          />
        </div>
        <button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className={classes.button}
        >
          SUBSCRIBE
        </button>
      </div>
    </form>
  </div>
)