import EventCard from "./components/EventCard";
import styled from "styled-components";
import {useEffect, useState} from "react";

function App() {
  const [filter, setFilter] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/data.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <Main>
      <input value={filter} onChange={(v) => setFilter(v.target.value)} />
      <EventHeader>
        <div>Date</div>
        <div>Event</div>
        <div>Location</div>
      </EventHeader>
      <EventWrapper>
        {events
          .filter(
            (e) =>
              e.event.toLowerCase().includes(filter.toLowerCase()) ||
              e.location.toLowerCase().includes(filter.toLowerCase())
          )
          .map((event) => (
            <EventCard event={event} key={event.event} />
          ))}
      </EventWrapper>
    </Main>
  );
}

const Main = styled.main`
  background-color: #fafafa;
  font-family: "Montserrat", sans-serif;

  & > input {
    font-family: inherit;
    font-weight: 500;
    padding: 8px 16px;
    font-size: 16px;
  }
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventHeader = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #121212;
  font-weight: 600;

  padding: 8px;
  margin: 8px 0;
  border-radius: 16px;

  display: grid;
  grid-template-columns: 15ch 35ch auto;
  grid-gap: 32px;
`;

export default App;
