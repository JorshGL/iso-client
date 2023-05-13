import React from "react";
import { useSelector } from "react-redux";
import { MdEdit, MdOutlineCalendarMonth, MdOutlineBook } from "react-icons/md";

const SideBar = () => {
  const { user } = useSelector((state) => state.auth);
  const { permissions } = user.role;

  return (
    <div className="flex flex-col w-1/5 h-full bg-custom-blue-main items-center justify-center text-white absolute top-0 left-0 text-sm">
      <div className="flex items-center justify-center w-3/5 aspect-square overflow-hidden rounded-full">
        <img src={user.pictureRef} alt="" />
      </div>
      <div className="flex flex-col w-full items-center font-poppins pt-3">
        <h1 className="font-extrabold">{user.name}</h1>
        <h1 className="font-light">{user.email}</h1>
      </div>

      <span className="h-[2px] w-full bg-custom-blue-soft my-8"></span>

      <div className="flex flex-col w-5/6 items-center justify-center gap-4 font-inter font-medium">
        {permissions.canEditOwnProfile && (
          <button className="flex items-center gap-3 py-2 px-3 rounded-lg bg-custom-blue-soft w-full">
            <MdEdit className="text-3xl" />
            Editar perfil
          </button>
        )}
        {permissions.canViewOwnCalendar && (
          <button className="flex items-center gap-3 py-2 px-3 rounded-lg bg-custom-blue-soft w-full">
            <MdOutlineCalendarMonth className="text-3xl" />
            Ver calendario
          </button>
        )}
        {permissions.canEditCourses && (
          <button className="flex items-center gap-3 py-2 px-3 rounded-lg bg-custom-blue-soft w-full">
            <MdOutlineBook className="text-3xl" />
            Editar asignaturas
          </button>
        )}
      </div>
    </div>
  );
};

export default SideBar;
