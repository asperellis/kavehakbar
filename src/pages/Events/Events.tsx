import React from "react";
import eventsImg from "../../images/events.jpg";
import { getEvents } from "../../service";

const events = getEvents();

export const Events = () => (
  <section className="events">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={eventsImg}
            alt="Upcoming and Past Events"
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <h6 className="section-header">UPCOMING EVENTS</h6>
          <p>
            To set up a reading or speaking engagement, contact{" "}
            <a
              href="mailto:kevin@tuesdayagency.com"
              title="General Inquiries or booking requests for Kaveh"
            >
              The Tuesday Agency
            </a>
            .
          </p>
          {events.length ? (
            events.map((event, i) => (
              <a href={event.url || "/events"} title={event.name} key={i}>
                <div className="event d-flex flex-row">
                  <div className="event-date">
                    <h6>
                      {event.date}
                      {event.time && (
                        <span>
                          <br />
                          at {event.time}
                        </span>
                      )}
                    </h6>
                  </div>
                  <div className="event-info">
                    <h6 className="normal">{event.name.toUpperCase()}</h6>
                    {event.guests && <p>{event.guests}</p>}
                    {event.location && <p>{event.location}</p>}
                    {event.address && <p>{event.address}</p>}
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p>Online event schedule to come.</p>
          )}
        </div>
      </div>
    </div>
  </section>
);
