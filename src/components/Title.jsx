import React from "react";
import "../styles/title.css";
export default function Title({ title ,type }) {
  return <div className={`${type == "oukkaha" ? "title-oukkaha" : "title-alafIssen"} title`}>{title}</div>;
}
