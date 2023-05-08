import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/auth.thunks";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [rememberUsername, setRememberUsername] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginButtonEnabled, setLoginButtonEnabled] = useState(false);

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (!email || !password) {
      setLoginButtonEnabled(false);
      return;
    }
    setLoginButtonEnabled(true);
  }, [email, password]);

  useEffect(() => {
    console.log("aaa");
    if (error) toast.error(error);
  }, [error]);

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="p-4 rounded-xl shadow-xl shadow-neutral-400 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="space-y-4">
            <button
              disabled={!loginButtonEnabled}
              className="rounded-xl w-full bg-custom-blue-main p-4 font-bold text-white disabled:opacity-30 disabled:cursor-not-allowed ease-in-out duration-500"
              onClick={handleLogin}
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
                "Acceder"
              )}
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
