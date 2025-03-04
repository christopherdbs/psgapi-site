import React, { useEffect, useState } from "react";
import Eiffel_tower from "../assets/eiffel.svg";
import Logo_w from "../assets/logo_w.png";
import { defaultPlayersResponse } from "../constants/defaultResponse.js";
import { requestAPI } from "../services/api.js";
import JsonViewer from "../components/JsonViewer.jsx";

function Home() {
  const [URLRequest, setURLRequest] = useState("player/1");
  const [response, setResponse] = useState(
    JSON.stringify(defaultPlayersResponse, null, "\t")
  );

  useEffect(() => {
    var message = document.getElementById("home_first");
    var next_message = document.getElementById("home_next");
    var last_message = document.getElementById("home_last");
    message.addEventListener("animationend", function () {
      message.style["border-right"] = "0px";
      next_message.style["display"] = "block";
      next_message.classList.add("textWriter");
    });
    next_message.addEventListener("animationend", function () {
      next_message.style["border-right"] = "0px";
      last_message.style["display"] = "block";
      last_message.classList.add("textWriter");
    });
  });

  function sendRequest() {
    requestAPI(URLRequest).then((newResponse) => {
      setResponse(JSON.stringify(newResponse, null, "\t"));
    });
  }

  function handleChange(event) {
    setURLRequest(event.target.value);
  }

  return (
    <div>
      <section className=" relative flex h-[575px] border-b-[75px] border-solid border-b-red-500">
        <div className="relative flex w-[calc(50%)]">
          <div id="home_message" className="ml-auto mr-auto flex flex-col">
            <span
              id="home_first"
              className="textWriter mt-[100px] animate-textWriter pr-1 text-xl"
            >
              Discover an entirely free and RESTFul API serving
            </span>
            <span
              id="home_next"
              className="textWriter hidden animate-textWriter pr-1 text-xl"
            >
              you all the data you need on your favorite team
            </span>
          </div>
        </div>
        <div className="flex-grow">
          <span
            id="home_last"
            className="textWriter m-auto mt-[300px] hidden max-w-fit animate-textWriter pr-1 text-lg"
          >
            . . . and so much more !
          </span>
        </div>
        <img
          src={Eiffel_tower}
          className="absolute bottom-0 left-0 right-0 m-auto h-[450px]"
        />
        <span
          id="welcomeTxt"
          className="absolute bottom-0 left-0 right-0 inline-flex max-h-12 translate-y-16 items-center justify-center text-[44px] text-white"
        >
          <p className="pb-1">WELCOME TO THE</p>
          <img src={Logo_w} className="ml-3 h-11 "></img>
        </span>
      </section>
      <section className="h-fit bg-gradient-to-t from-[#01152c] via-[#00273e] to-[#134057] p-4">
        <div id="exampleRequest" className="m-auto flex h-fit w-8/12">
          <span className="flex h-11 w-52 items-center justify-center bg-[rgba(0,0,0,0.3)] p-1 font-semibold text-white">
            https://psgapi.com/v1/
          </span>
          <input
            defaultValue={URLRequest}
            onChange={handleChange}
            className="h-11 flex-grow border-solid border-gray-200 bg-gray-200 p-1 focus:border-2 focus:border-orange-200 focus:outline-none"
          ></input>
          <button
            onClick={sendRequest}
            className="h-11 w-24 border-solid bg-[#CEAB5D] p-1"
          >
            Request
          </button>
        </div>
        <JsonViewer data={response}></JsonViewer>
      </section>
    </div>
  );
}

export default Home;
