import EventList from "../components/EventList";
import { getFeaturedEvents } from "./../dummy-data";

function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventList events={featuredEvents} />
    </>
  );
}

export default Home;
