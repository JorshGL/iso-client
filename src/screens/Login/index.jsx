import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/auth.thunks";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

const Login = () => {
  const dispatch = useDispatch();

  const [rememberUsername, setRememberUsername] = useState(false);

  return (
    <div className="flex w-full h-screen font-inter">
      <div className="h-full w-1/2 flex flex-col items-center">
        <div className="flex items-center justify-center h-1/3 overflow-hidden">
          <img
            className="w-2/3"
            src="https://s3-alpha-sig.figma.com/img/c066/3351/0812b4428a09b6f351717aba45f09137?Expires=1684108800&Signature=fMC0JEJm5lpUBT2TY-A8ap9f2G8Z3jcOHb-B~d0rrA0n0XJurerCyUlY4vratYTli9etO40aWwNpM1CSRTDdNrdtErnefj2Br5JzOIpR6-pGKX6mTKSD-ffJRaLqDkd~oT3foIeI0PP9Gd~tQuO2-oxz~JhRU-Nf2BNk73sboU73Hebs2~sBnh6Gar6OG8~rshfN2W~LX4eVxvDGGFMcqjDE5E4C6wT9RQ6g33xjyYnZlIdwj7yR1pS2KVBD1TL-FV4yayinH61bY2nKpCyHcnSzlAcU0uxxAQvb~yZo8iJ1b5hLaHgeQEMNV8S7OoBQm2xF4439-e0heJ0akphVtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-10 w-2/3">
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-xl shadow-xl shadow-neutral-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Contraseña"
            className="p-4 rounded-xl shadow-xl shadow-neutral-400 focus:outline-none"
          />
          <div className="space-y-4">
            <button
              className="rounded-xl w-full bg-custom-blue-main p-4 font-bold text-white"
              onClick={() => dispatch(login())}
            >
              Acceder
            </button>

            <div className="flex self-start items-center text-sm gap-2 px-2">
              <span
                className="text-xl cursor-pointer"
                onClick={() => setRememberUsername(!rememberUsername)}
              >
                {rememberUsername ? (
                  <MdOutlineCheckBox />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank />
                )}
              </span>
              Recordar nombre de usuario
            </div>

            <figure className="flex items-center justify-between w-full">
              <span className="h-[0.5px] w-5/12 bg-black"></span>
              <span className="text-md font-inter">O</span>
              <span className="h-[0.5px] w-5/12 bg-black"></span>
            </figure>

            <div className="flex items-center gap-3 rounded-xl w-full shadow-xl shadow-neutral-400 p-4 cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                alt=""
                className="object-scale-down h-6"
              />
              Log in with Google
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 overflow-hidden flex items-end">
        <img
          className="w-full"
          src="https://s3-alpha-sig.figma.com/img/67c8/c26f/da677b0cf7c947440a40b516f7b4e9ae?Expires=1684108800&Signature=PQNJcrPZ2d3k7lCpEaSTub7sKD0k8sdiuUhdfiq754nmyYzmq7fnR3haros2Vnv1JajMGUisT8YHJvTJ~i~lIlNoxSpVAIZO-i1qDGETQwyvuZIzMhLvi-O3ItHaBN~YBRMdIWWJgR5e3vExxjRcVFU2muN9LZ2UaPuWLJ1zy1YZy~lQ~auiCfUuAchI8kw7mxB9BX2iarCJQYcLNwja5bXs3G692N4QyfZt1RHbKpnVf99o0LCxnnpiPGChna~n2RvHKSUJjBX0F01K-eshEkZtuVSlEUD2yct0lzICL2lPVJB-VHuFJzhgfftHTSghyC4Otm-n7-03bsM6Vsk-wA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
