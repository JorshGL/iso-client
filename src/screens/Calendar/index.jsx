import React, { useEffect, useState } from "react";
import Kalend, { CalendarView } from "kalend";
import { api } from "../../api/api";
import { useSelector } from "react-redux";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const getEvents = async () => {
    const { data: response } = await api.get(`/monitorias/findAllByStudentId/${user.id}`);
    setEvents(
      response.data.map((evt) => ({
        id: evt.id,
        startAt: evt.dateAndTimeStart,
        endAt: evt.dateAndTimeEnd,
        summary: `${evt.course.shortname} - ${
          evt.monitoriaToUsers.find(user => user.role === 'monitor')?.user.name
        }`,
        color: "#B0C0F7",
      }))
    );
  };

  useEffect(() => {
    getEvents();
  }, []);


  return (
    <Kalend
      language="es"
      initialView={CalendarView.WEEK}
      colors={{
        light: {
          primaryColor: "#F3F3A6",
        },
      }}
      events={events}
    />
  );
};

export default Calendar;
