import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructorById } from "../../store/instructors/instructors.thunk";
import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css";
import moment from "moment/moment";
import UserCard from "./components/UserCard";
import Courses from "./components/Courses";
import Modal from "./components/Modal";

const Instructor = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { instructor } = useSelector((state) => state.instructors);
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const days = new Map()
    .set("lunes", 0)
    .set("martes", 1)
    .set("miercoles", 2)
    .set("jueves", 3)
    .set("viernes", 4)
    .set("sabado", 5)
    .set("domingo", 6);

  useEffect(() => {
    dispatch(fetchInstructorById(userId));
  }, [userId]);

  useEffect(() => {
    if (!instructor) return;
    const eventsArr = [];

    instructor.schedule.forEach((day) => {
      day.times.forEach((time) => {
        const date = moment().startOf("isoWeek").add(days.get(day.day), "days");
        const e = {
          id: [day.day, time.start, time.end],
          startAt: date
            .set("hour", Number(time.start.split(":")[0]))
            .set("minute", Number(time.start.split(":")[1]))
            .toISOString(),
          endAt: date
            .set("hour", Number(time.end.split(":")[0]))
            .set("minute", Number(time.end.split(":")[1]))
            .toISOString(),
          summary: "Monitoria",
          color: "#B0C0F7",
        };
        eventsArr.push(e);
      });
    });

    setEvents(eventsArr);
  }, [instructor]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setOpenModal(true);
  };

  return (
    <>
      {instructor ? (
        <div className="grid grid-cols-3 grid-rows-5 gap-5 mx-auto w-11/12 h-full">
          {openModal && (
            <Modal
              event={selectedEvent}
              setOpenModal={setOpenModal}
              courses={instructor?.courses}
              instructorId={instructor?.id}
            />
          )}
          <div className="col-span-2 row-span-4 border-8 border-custom-yellow-extralight rounded-lg">
            <Kalend
              language="es"
              disabledViews={[
                CalendarView.AGENDA,
                CalendarView.DAY,
                CalendarView.MONTH,
                CalendarView.THREE_DAYS,
              ]}
              events={events}
              focusHour={7}
              colors={{
                light: {
                  primaryColor: "#F3F3A6",
                },
              }}
              onEventClick={handleEventClick}
            />
          </div>
          <div className="row-span-4">
            <UserCard user={instructor} />
          </div>
          <div className="col-span-2">
            <Courses courses={instructor.courses} />
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center h-full">
          <svg
            aria-hidden="true"
            className="w-1/6 aspect-square text-white animate-spin fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Instructor;
