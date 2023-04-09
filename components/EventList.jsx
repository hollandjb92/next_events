import EventItem from "./EventItem.jsx";
import classes from "../styles/eventList.module.css";

function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
