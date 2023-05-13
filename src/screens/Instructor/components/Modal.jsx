import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  MdOutlineCancel,
  MdOutlineLaptopMac,
  MdPersonOutline,
} from "react-icons/md";
import { useSelector } from "react-redux";
import Select from "react-select";
import { api } from "../../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MONT_NAMES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const Modal = ({ setOpenModal, event, courses, instructorId }) => {
  const { id: studentId } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [selectedModality, setSelectedModality] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!selectedModality || !selectedCourse) return;
    setButtonEnabled(true);
  }, [selectedModality, selectedCourse]);

  const handleCreateMonitoria = async () => {
    setLoading(true);
    const data = {
      studentId,
      instructorId,
      dateAndTimeStart: event.startAt,
      dateAndTimeEnd: event.endAt,
      description,
      modality: selectedModality,
      courseId: selectedCourse,
    };
    const { data: response } = await api.post("/monitorias/create", data);
    if (response.success) toast.success("Monitoria creada con éxito");
    else toast.error("Error al crear la monitoria");
    setOpenModal(false);
    navigate("/calendar");
  };

  return (
    <div className="fixed flex items-center justify-center h-screen w-screen bg-black bg-opacity-30 z-50 top-0 left-0 font-inter">
      <div className="my-auto w-1/2 bg-neutral-100 rounded-md drop-shadow-2xl p-4">
        <MdOutlineCancel
          className="text-xl ml-auto cursor-pointer"
          onClick={() => setOpenModal(false)}
        />

        <div className="grid grid-cols-1 grid-rows-5 items-center gap-5 h-full">
          <div className="flex w-full justify-around row-span-1">
            <div className="border border-black p-2 rounded-lg">{`${
              MONT_NAMES[moment(event.startAt).month()]
            } ${moment(event.startAt).format("DD, YYYY")}`}</div>

            <div className="flex text-2xl gap-3 items-center">
              <div
                className={`p-2 border border-neutral-400 rounded-lg cursor-pointer ${
                  selectedModality === "remota" ? "bg-neutral-300" : "bg-white"
                }`}
                onClick={() => setSelectedModality("remota")}
              >
                <MdOutlineLaptopMac />
              </div>
              <div className="text-xs w-1/3 text-center">Seleccionar modalidad</div>
              <div
                className={`p-2 border border-neutral-400 rounded-lg cursor-pointer ${
                  selectedModality === "presencial"
                    ? "bg-neutral-300"
                    : "bg-white"
                }`}
                onClick={() => setSelectedModality("presencial")}
              >
                <MdPersonOutline />
              </div>
            </div>

            <div className="text-lg font-semibold p-2">
              <span className="border-b-2 border-custom-blue-main">
                {moment(event.startAt).format("hh:mm A")}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-11/12 h-full gap-2 row-span-3 mx-auto">
            <Select
              options={courses.map((c) => ({ label: c.name, value: c.id }))}
              className="w-full"
              onChange={(e) => setSelectedCourse(e.value)}
            />
            <textarea
              className="w-full h-full resize-none rounded-lg text-sm p-2 outline-neutral-200"
              placeholder="Descripción"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            disabled={!buttonEnabled}
            onClick={() => handleCreateMonitoria()}
            className="ml-auto rounded-lg uppercase bg-custom-blue-main font-medium text-sm py-2 w-1/6 text-white disabled:opacity-30 disabled:cursor-not-allowed ease-in-out duration-500"
          >
            {loading ? (
              <div className="flex w-full justify-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white animate-spin fill-blue-600"
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
            ) : (
              "Agendar"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
