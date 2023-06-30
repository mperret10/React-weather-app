import React from "react";

export default function Date(props) {
  let now = new Date();
  let h4 = document.querySelector("h4");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (h4.innerHTML = `${day} ${hours}:${minutes}`);
}
