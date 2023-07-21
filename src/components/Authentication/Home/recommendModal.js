import React from "react";
import recommendedGames from "./recommendedGames";
import dummyData from "./dummyData";

export default function Modal(props) {
  //   const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open large modal
      </button> */}
      {props.getModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                style={{ backgroundColor: "#111111" }}
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3
                    className="text-3xl font-semibold"
                    style={{ color: "White" }}
                  >
                    Recommended
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setGetModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="grid grid-cols-3 grid-flow-row gap-y-4 gap-x-8 ">
                    {recommendedGames.type === dummyData.type &&
                      recommendedGames.map((data) => (
                        <div
                          style={{
                            height: "230px",
                            width: "270px",
                            border: "1px solid black",
                            borderRadius: "20px",
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
                            <div
                              className="text-white"
                              style={{ fontSize: "12px" }}
                            >
                              {data.description}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setGetModal(false)}
                  >
                    Close
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
