import React, {useState} from "react";
import axios from "axios";
import {Redirect, useHistory} from "react-router-dom";
import { useToasts } from 'react-toast-notifications'
import { Link } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const { addToast } = useToasts()
  const [value, setValue] = useState({
    username: "",
    email:'',
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setValue({...value, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    axios.post("http://localhost:5000/user/register", value).then((res) => {
      console.log("ressssss",res)
      if (res.data.success === true) {
        addToast("Account Created Successfully", {
          appearance: 'success',
          autoDismiss: true,
        })
        history.push("/login");
      } else {
        if (res.data.error) {
          addToast(res.data.error, {
            appearance: "error",
            autoDismiss: true,
          });
        } else if (res.data.message) {
          addToast(res.data.message, {
            appearance: "error",
            autoDismiss: true,
          });
        } else {
          addToast("Something went wrong", {
            appearance: "error",
            autoDismiss: true,
          });
        }
       
        
      }
    });
  };

  return (
    <div
      className="grid grid-cols-2"
      style={{
        backgroundImage:
          "url(https://cdn.discordapp.com/attachments/729933008827711510/921425259696103514/base.png)",
        //   https://cdn.discordapp.com/attachments/729933008827711510/921425259696103514/base.png
      }}
    >
      <div className="">
        <div className="min-h-screen" style={{ backdropFilter: "blur(30px)" }}>
          <div className="flex flex-row">
            <div className="basis-1/4">
              <img
                src="https://cdn.discordapp.com/attachments/729933008827711510/921425260774035476/LOGO.png"
                alt=""
              />
            </div>
            <div className="basis-1/2"></div>
            <Link to='/login' className="basis-1/4 self-center text-white">
            <button src="" >
              Login
            </button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-md shadow-sm mt-40">
              <div className="mb-6 w-64 flex bg-gray-700 rounded-lg">
                <span>
                  <i className="fa-thin fa-user px-4 py-3 text-white"></i>
                </span>
                <span>
                  <input
                    id="email-address"
                    name="username"
                    type="username"
                    required
                    placeholder="Username"
                    class="py-2 px-1 bg-gray-700 placeholder-white text-white focus-visible:outline-none"
                    onChange={handleChange}
                  />
                </span>
              </div>
              <div className="mb-6 w-64 flex bg-gray-700 rounded-lg">
                <span>
                  <i className="fa-thin fa-envelope px-4 py-3 text-white focus-visible:outline-none"></i>
                </span>
                <span>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="off"
                    required
                    placeholder="Email"
                    onChange={handleChange}
                    class="py-2 px-1 bg-gray-700 placeholder-white focus-visible:outline-none text-white"
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
                    autocomplete="current-password"
                    required
                    class="py-2 px-1 bg-gray-700 placeholder-white focus-visible:outline-none text-white"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </span>
              </div>
              {/* <div className="text-right text-white text-sm">
                <a href="#">Forgot Password?</a>
              </div> */}
              <div className="mt-4">
                <input
                  type="button"
                  value="Register"
                  className="
                  focus-visible:outline-none
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
      </div>
      <div>
        <img
          style={{ height: "100vh" }}
          className="w-full"
          src="https://cdn.discordapp.com/attachments/729933008827711510/921425260065226853/jett.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
