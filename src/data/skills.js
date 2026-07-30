import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { MdApi } from "react-icons/md";

const skills = [
  {
    id: 1,
    name: "React.js",
    icon: FaReact,
    color: "#61DAFB",
    bgColor: "rgba(97, 218, 251, 0.15)",
    category: "Frontend"
  },
  {
    id: 2,
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    bgColor: "rgba(247, 223, 30, 0.15)",
    category: "Frontend"
  },
  {
    id: 3,
    name: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    bgColor: "rgba(51, 153, 51, 0.15)",
    category: "Backend"
  },
  {
    id: 4,
    name: "Express.js",
    icon: SiExpress,
    color: "#ffffff",
    bgColor: "rgba(255, 255, 255, 0.10)",
    category: "Backend"
  },
  {
    id: 5,
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    bgColor: "rgba(71, 162, 72, 0.15)",
    category: "Database"
  },
  {
    id: 6,
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    bgColor: "rgba(227, 79, 38, 0.15)",
    category: "Frontend"
  },
  {
    id: 7,
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    bgColor: "rgba(21, 114, 182, 0.15)",
    category: "Frontend"
  },
  {
    id: 8,
    name: "Java",
    icon: FaJava,
    color: "#007396",
    bgColor: "rgba(26, 167, 218, 0.15)",
    category: "Language"
  },
  {
    id: 9,
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    bgColor: "rgba(55, 118, 171, 0.15)",
    category: "Language"
  },
  {
    id: 10,
    name: "SQL",
    icon: SiMysql,
    color: "#4479A1",
    bgColor: "rgba(68, 121, 161, 0.15)",
    category: "Database"
  },
  {
    id: 11,
    name: "REST APIs",
    icon: MdApi,
    color: "#FF6C37",
    bgColor: "rgba(255, 108, 55, 0.15)",
    category: "Backend"
  },
];

export default skills;