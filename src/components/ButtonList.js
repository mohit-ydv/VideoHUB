import React from "react";
import Button from "./Button";
const list = [
  "All",
  "Soccer",
  "Live",
  "Cricket",
  "Motivation",
  "Bollywood live",
  "News",
  "Technology",
  "Share market",
  "Hot",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};
export default ButtonList;
