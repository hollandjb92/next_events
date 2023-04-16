import EventList from "@/components/EventList";
import EventSearch from "@/components/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={onSearch} />
      <EventList events={events} />;
    </>
  );
};

export default EventsPage;
