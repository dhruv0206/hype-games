/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useToasts} from "react-toast-notifications";
import {useHistory} from "react-router-dom";

export default function UpdateModal(props) {
  const {addToast} = useToasts();
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [getUsername, setGetUsername] = useState("");
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setValue({...value, [e.target.name]: e.target.value});
  };

  const updateUserData = (id) => {
    const token = window.localStorage.getItem("token");
    axios
      .put(`http://localhost:5000/user/admin/update/${id}`, value, {
        headers: {Authorization: token},
      })
      .then((res) => {
        // console.log("Added", value);
        // setValue({username: "", password: ""});
        if (res.data.success === true) {
          setValue({username: "", password: ""});
          addToast("User Updated Successfully", {
            appearance: "success",
            autoDismiss: true,
          });
          props.setShowModal(false);
          history.push("/");
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
          // if(res.data.message.length > 0){
          //   addToast(res.data.message, {
          //     appearance: 'error',
          //     autoDismiss: true,
          //   })
          // }
          // else{
          //   addToast(res.data.error, {
          //     appearance: 'error',
          //     autoDismiss: true,
          //   })
          // }
        }
      });

    // setData(response);
    // console.log(data);
  };

  const getUserData = () => {
    const token = window.localStorage.getItem("token");
    axios
      .get("http://localhost:5000/user/get", {
        headers: {Authorization: token},
      })
      .then((res) => {
        console.log("res", res);
        setUserData(res.data);
        setGetUsername(res.data.username);
      });

    // setData(response);
    // console.log(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#111111] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-white focus-visible:outline-none">
                  <h5 className="text-3xl font-semibold">
                    Update Username or password
                  </h5>
                  {/* <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setShowModal(false)}
                  >
                    <span className=" text-white opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button> */}
                </div>
                {/*body*/}
                <div className="flex flex-col items-center h-full">
                  <div className="rounded-md shadow-sm mt-12">
                    <div
                      className="mb-6 w-64 flex  rounded-lg"
                      style={{backgroundColor: "#2B2B2B"}}
                    >
                      <span>
                        <i className="fa-thin fa-envelope px-4 py-3 text-white focus-visible:outline-none"></i>
                      </span>
                      <span>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          //   autocomplete="username"
                          value={value.username}
                          required
                          placeholder="Update Username"
                          className="text-white py-2 px-1  placeholder-white focus-visible:outline-none"
                          style={{backgroundColor: "#2B2B2B"}}
                          onChange={handleChange}
                        />
                      </span>
                    </div>
                    <div
                      className="mt-2 mb-4 flex rounded-lg"
                      style={{backgroundColor: "#2B2B2B"}}
                    >
                      <span>
                        <i className="fa-thin fa-lock px-4 py-3 text-white"></i>
                      </span>
                      <span style={{backgroundColor: "#2B2B2B"}}>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          //   autocomplete="current-password"
                          required
                          className="text-white py-2 px-1 placeholder-white focus-visible:outline-none"
                          style={{backgroundColor: "#2B2B2B"}}
                          placeholder="Password"
                          onChange={handleChange}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => updateUserData(userData._id)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
