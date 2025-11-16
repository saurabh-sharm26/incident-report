import React from "react";
import highIcon from "../assets/img/alarm-high.svg";
import mediumIcon from "../assets/img/alarm-medium.svg";
import lowIcon from "../assets/img/alarm-low.svg";

interface Props {
  priority: number;
}

const icons: Record<number, string> = {
  1: highIcon,
  2: mediumIcon,
  3: lowIcon,
};

export const PriorityIcon: React.FC<Props> = ({ priority }) => (
  <img
    src={icons[priority]}
    alt={`Priority ${priority}`}
    width={20}
    height={20}
  />
);
