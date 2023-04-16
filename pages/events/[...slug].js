import Button from "@/components/Button";
import EventList from "@/components/EventList";
import ResultsTitle from "@/components/eventDetail/ResultsTitle";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <h2>Loading...</h2>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: 10 }}>Invalid filter selected</h1>
        <div style={{ padding: 10 }}>
          <Button link="/events">Show All Events</Button>
        </div>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: 10 }}>No events found</h1>
        <div style={{ padding: 10 }}>
          <Button link="/events">Show All Events</Button>
        </div>
      </div>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
