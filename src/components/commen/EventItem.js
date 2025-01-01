import React from "react";
import { Link } from "react-router-dom";

export default function EventItem(props) {
  return (
    <>
      {props.events.map((event) => (
        <Link to={`../event-view/${event.id}`} key={event.id} className="event-item">
          <div className="item-content">
            <div className="event-item">
              <div className="event-background">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-details">
                <h1>{event.title}</h1>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
