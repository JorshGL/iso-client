import React from "react";
import { useSelector } from "react-redux";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const InstructorsTable = () => {
  const { instructors, loading } = useSelector((state) => state.instructors);

  const navigate = useNavigate();

  const dayOfWeek = () => {
    const today = moment()
    return today.day() >= 5 ? moment().startOf('isoWeek').day() : today.day()
  }

  return (
    <table className="w-5/6 mx-auto my-10 table-fixed">
      <thead>
        <tr className="bg-custom-yellow-main uppercase text-xs h-12">
          <th>Nombre</th>
          <th>Asignaturas</th>
          <th>Horario</th>
          <th>Info</th>
        </tr>
      </thead>

      <tbody>
        {instructors &&
          instructors.map((instructor) => (
            <tr
              className="uppercase text-xs border-b border-neutral-400 text-center h-16 overflow-hidden cursor-pointer hover:bg-neutral-200 transition-all"
              onClick={() => navigate(`/monitoria/${instructor.id}`)}
              key={instructor.id}
            >
              <td>
                <div className="flex flex-col items-center justify-center">
                  <span>{instructor.name}</span>
                  <span className="text-[10px] font-light">{instructor.email}</span>
                </div>
              </td>

              <td>
                <div className="flex items-center h-full justify-center gap-2">
                  {instructor.courses?.map((course) => (
                    <div
                      className="flex items-center gap-1 bg-neutral-100 px-2 py-1 border border-neutral-300 rounded-3xl"
                      key={course.id}
                    >
                      <figure
                        className={`w-3 h-3 rounded-full bg-[${course.color}]`}
                      ></figure>
                      {course.shortname}
                    </div>
                  ))}
                </div>
              </td>

              <td>
                {Object.values(instructor.schedule[dayOfWeek()].times[0])
                  .reverse()
                  .join(" - ")}
              </td>

              <td>
                <div className="flex justify-center items-center">
                  <SlOptionsVertical />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default InstructorsTable;
