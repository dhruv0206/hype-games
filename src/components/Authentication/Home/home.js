/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import dummyData from "./dummyData";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UpdateModal from "./updateModal";
import RecommendModal from "./recommendModal";

const Home = () => {
  const history = useHistory();
  const [data, setData] = useState([
    {
      id: 1,
      text: "Far Cry 6",
      type: "action",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint minim mollit.",
    },
    {
      id: 2,
      text: "Call of Duty",
      type: "arcade",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint minim mollit.",
    },
  ]);
  const [username, setUsername] = useState("Dhruv");
  const [showModal, setShowModal] = useState(false);
  const [getModal, setGetModal] = useState(false);
  // const userInitial = data.username.charAt(0) || ''

  const getFromLocal = () => {
    const token = window.localStorage.getItem("token");
    axios
      .get("http://localhost:5000/user/get", {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log("res", res);
        setData(res.data);
        setUsername(res.data.username);
      });

    // setData(response);
    // console.log(data);
  };

  useEffect(() => {
    getFromLocal();
  }, []);

  return (
    <div className="bg-[#111111] flex items-center" style={{ height: "100vh" }}>
      <div className="bg-[#1B1B1B] my-12 flex flex-col items-center h-5/6 w-1/5 rounded-r-xl">
        <img
          className="h-20 w-20"
          src="https://cdn.discordapp.com/attachments/729933008827711510/921425260774035476/LOGO.png"
          alt=""
        />
        <div className="flex items-center mt-8">
          <div
            className="flex items-center justify-center relative rounded-full h-12 w-12"
            style={{
              backgroundColor: "blue",
            }}
          >
            <div
              className="absolute"
              style={{
                fontWeight: "600",
                fontSize: "25px",
                color: "white",
              }}
            >
              {username.charAt(0).toUpperCase()}
            </div>
            <div
              className="absolute"
              style={{
                backgroundColor: "#38FF40",
                height: "10px",
                width: "10px",
                borderRadius: "10px",
                marginTop: "-33px",
                marginLeft: "38px",
                border: "1px solid black",
              }}
            ></div>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div
              style={{ fontSize: "16px", fontWeight: "bold", color: "white" }}
            >
              {data.username}
            </div>
            <div style={{ marginTop: "3px", color: "#707070" }}>Online</div>
          </div>
        </div>
        <div className="flex flex-col" style={{ marginTop: "14rem" }}>
          <div
            className="px-14 py-2 rounded-lg cursor-pointer"
            style={{ backgroundColor: "#2B2B2B", color: "white" }}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Update
          </div>
          <button
            className="px-14 mt-4 py-2 rounded-lg mb-12"
            style={{ backgroundColor: "#2B2B2B", color: "white" }}
            onClick={() => {
              window.localStorage.removeItem("token");
              history.push("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mx-auto">
        <div
          className="text-white font-semibold mb-3"
          style={{ fontSize: "18px" }}
        >
          Recommended
        </div>
        <div className="grid grid-cols-3 grid-flow-row gap-y-4 gap-x-8 ">
          {dummyData.map((data) => (
            <div
              style={{
                height: "230px",
                width: "270px",
                border: "1px solid black",
                borderRadius: "20px",
              }}
              className="cursor-pointer"
              onClick={() => {
                setGetModal(true);
              }}
            >
              <img
                src={require(`../../../assets/${data.id}.jpg`)}
                style={{
                  height: "45%",
                  width: "100%",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              />
              <div className="px-5">
                <div
                  className="text-white font-semibold my-4"
                  style={{ fontSize: "15px" }}
                >
                  {data.text}
                </div>
                <div className="text-white" style={{ fontSize: "12px" }}>
                  {data.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <UpdateModal showModal={showModal} setShowModal={setShowModal} />
      <RecommendModal getModal={getModal} setGetModal={setGetModal} />
    </div>
  );
};

export default Home;
