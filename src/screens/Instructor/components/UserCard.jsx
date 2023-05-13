import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-around text-sm w-full h-full bg-neutral-100 rounded-3xl p-8 font-light">
      <div className="flex items-center justify-center w-3/5 aspect-square overflow-hidden rounded-full">
        <img src={user.pictureRef} alt="" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="text-base font-black">{user.name}</span>

        <span>{user.email}</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="font-extrabold">{user.career}</span>

        <span>Facultad de {user.faculty}</span>

        <span>{user.semester} semestre</span>
      </div>
    </div>
  );
};

export default UserCard;
