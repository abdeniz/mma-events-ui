import React from "react";
import styled from "styled-components";
import {format} from "date-fns";

const EventCard = ({event}) => {
  const date = format(new Date(event.dateTime), "dd.MM.yyyy h:mm");

  return (
    <EventCardWrapper>
      <StyledDate>{date}</StyledDate>
      <Event>{event.event}</Event>
      <div>{event.location}</div>
    </EventCardWrapper>
  );
};

const StyledDate = styled.div`
  font-weight: 300;
`;

const Event = styled.div`
  font-weight: 600;
`;

const EventCardWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: #121212;

  padding: 8px;
  margin: 8px 0;
  border-radius: 16px;

  display: grid;
  grid-template-columns: 15ch 35ch auto;
  grid-gap: 32px;
`;

export default EventCard;
