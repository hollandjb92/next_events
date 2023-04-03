import Image from "next/image";
import Link from "next/link";

function EventItem({ event }) {
  const humanReadableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = event.location.replace(", ", "\n");

  const eventDetailLink = `/events/${event.id}`;

  return (
    <li>
      <Image
        src={"/" + event.image}
        alt={event.title}
        width={450}
        height={300}
      />
      <div>
        <div>
          <h2>{event.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={eventDetailLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
