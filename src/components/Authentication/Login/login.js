import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";

const Login = () => {
  const { addToast } = useToasts();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    // e.preventDefault();
    // setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    history.push("/");
    // axios.post("http://localhost:5000/user/login", value).then((res) => {
    //   console.log("ressssss", res);
    //   const token = window.localStorage.setItem("token", res.data.token);
    //   if (res.data.success === true) {
    //     addToast("Login in Successful", {
    //       appearance: "success",
    //       autoDismiss: true,
    //     });
    //     history.push("/");
    //   } else {
    //     if (res.data.error) {
    //       addToast(res.data.error, {
    //         appearance: "error",
    //         autoDismiss: true,
    //       });
    //     } else if (res.data.message) {
    //       addToast(res.data.message, {
    //         appearance: "error",
    //         autoDismiss: true,
    //       });
    //     } else {
    //       addToast("Something went wrong", {
    //         appearance: "error",
    //         autoDismiss: true,
    //       });
    //     }
    //     // if(res.data.message.length > 0){
    //     //   addToast(res.data.message, {
    //     //     appearance: 'error',
    //     //     autoDismiss: true,
    //     //   })
    //     // }
    //     // else{
    //     //   addToast(res.data.error, {
    //     //     appearance: 'error',
    //     //     autoDismiss: true,
    //     //   })
    //     // }
    //   }
    // });
  };

  useEffect(() => {}, []);

  return (
    <div
      className="grid grid-cols-2 min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage:
          "url(https://cdn.discordapp.com/attachments/729933008827711510/921425259696103514/base.png)",
        height: "100vh",
      }}
    >
      <div className="min-h-screen" style={{ backdropFilter: "blur(30px)" }}>
        <div className="flex flex-row">
          <div className="basis-1/4">
            <img
              src="https://cdn.discordapp.com/attachments/729933008827711510/921425260774035476/LOGO.png"
              alt=""
            />
          </div>
          <div className="basis-1/2"></div>
          <Link to="/sign-up" className="basis-1/4 self-center text-white">
            <button src="">REGISTER</button>
          </Link>
        </div>
        <div className="flex flex-col items-center h-full">
          <div className="rounded-md shadow-sm mt-40">
            <div className="mb-6 w-64 flex bg-gray-700 rounded-lg">
              <span>
                <i className="fa-thin fa-envelope px-4 py-3 text-white"></i>
              </span>
              <span className="bg-gray-700">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  class="py-2 px-1 bg-gray-700 bg-transparent placeholder-white focus-visible:outline-none text-white"
                  onChange={handleChange}
                />
              </span>
            </div>
            <div className="mt-2 mb-4 flex bg-gray-700 rounded-lg">
              <span>
                <i className="fa-thin fa-lock px-4 py-3 text-white"></i>
              </span>
              <span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  class="py-2 px-1 bg-gray-700 placeholder-white text-white focus-visible:outline-none"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </span>
            </div>
            {/* <div className="text-right text-white text-sm">
              <a href="#">Forgot Password?</a>
            </div> */}
            <div className="mt-4">
              <input
                type="button"
                value="Login"
                className="
                  w-full
                  bg-[#0047FF]
                  rounded-lg
                  py-2
                  text-white
                  font-semibold
                  cursor-pointer
                "
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-full min-h-screen"
          src="https://cdn.discordapp.com/attachments/729933008827711510/921425260065226853/jett.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
