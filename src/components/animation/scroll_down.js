import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import * as animationData from "./scroll_down.json";

function ScrollArrow() {
  /*useEffect(() => {
    fetch("./cafeca/scroll_down.json")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((jsonData) => {
        const animationData = { jsonData };
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  });*/

  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed: 1,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      options={defaultOptions}
      background="transparent"
      width={100}
      height={100}
    ></Lottie>
  );
}
export default ScrollArrow;
