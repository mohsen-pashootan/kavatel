import React, { useEffect, useState } from "react";

export default function CountDownTimer({ startMin,startSec }) {
  const [minute, setMinute] = useState(startMin);
  const [sec, setSec] = useState(startSec || "00");

  useEffect(() => {
    const timer = setInterval(() => {
      if (sec !== 0) setSec(sec - 1);
      if (sec === 0 || sec === "00") {
        if (minute === 0) {
          console.log("finished");
          clearInterval(timer);
        }
        if (minute > 0) {
          setMinute(minute - 1);
          setSec(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minute, sec]);


  return <span> {`${minute} : ${sec} `} </span>;
}
