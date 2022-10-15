import React from 'react';
import readingsImg from '../../images/readings.jpg';
import { getReadings } from '../../service'; 

const readings = getReadings()

export const Readings = () => (
  <section className='readings'>
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
          <h6 className="section-header">UPCOMING READINGS</h6>
          <p>To set up a reading or speaking engagement, email Tabia Yapp, <a href="mailto:t@beotis.com">t@beotis.com</a>.</p>
          {readings.length ?
            readings.map((reading, i) => (
              <a href={reading.url || '/readings'} title={reading.name} key={i}>
                <div className="reading d-flex flex-row">
                  <div className="reading-date">
                    <h6>
                      {reading.date}
                      {reading.time && (<span><br />at {reading.time}</span>)}
                    </h6>
                  </div>
                  <div className="reading-info">
                    <h6 className="normal">{reading.name.toUpperCase()}</h6>
                    {reading.guests && <p>{reading.guests}</p>}
                    {reading.location && <p>{reading.location}</p>}
                    {reading.address && <p>{reading.address}</p>}
                  </div>
                </div>
              </a>
              )) :
            <p>Online event schedule to come.</p>
          }
          <h6 className="section-header">PAST READINGS</h6>
          <div className="reading d-flex flex-row">
            <p>Past readings, lectures, workshops, and appearances include the Poetry Foundation in Chicago, Bryant Park Reading Series in NYC, the Pulitzer Arts Foundation, St. Mark's Poetry Project, New York University, AWP, National Arts Club, KGB Reading Series, the Dodge Poetry Festival, the Amherst Poetry Festival, and many others.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
