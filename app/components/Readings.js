import React from 'react';
import readingsImg from './../images/readings.jpg';
import { readings } from './../content/content';

function Readings() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={readingsImg}
              alt="Upcoming and Past Readings"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h6 className="section-header">{'UPCOMING READINGS'}</h6>
            <p>
              {'To set up a reading or speaking engagement, email Tabia Yapp, '}
              <a href="mailto:t@beotis.com">{'t@beotis.com'}</a>
              {'.'}
            </p>
            {readings.map((r, i) => {
              return (
                <a href={r.url || '/#/readings'} title={r.name} key={i}>
                  <div className="reading d-flex flex-row">
                    <div className="reading-date">
                      <h6>
                        {r.date}
                        {r.time && <br /> + 'at ' + r.time}
                      </h6>
                    </div>
                    <div className="reading-info">
                      <h6 className="normal">{r.name.toUpperCase()}</h6>
                      {r.guests && <p>{r.guests}</p>}
                      {r.location && <p>{r.location}</p>}
                      {r.address && <p>{r.address}</p>}
                    </div>
                  </div>
                </a>
              );
            })}
            <h6 className="section-header">{'PAST READINGS'}</h6>
            <div className="reading d-flex flex-row">
              <p>
                {
                  'Past readings, lectures, workshops, and appearances include the Poetry Foundation in Chicago, Bryant Park Reading Series in NYC, the Pulitzer Arts Foundation, St. Mark’s Poetry Project, New York University, AWP, National Arts Club, KGB Reading Series, the Dodge Poetry Festival, the Amherst Poetry Festival, and many others. '
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Readings;
