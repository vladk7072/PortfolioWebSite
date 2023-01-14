import { FaReact } from "react-icons/fa";
import { SiRedux, SiTestinglibrary } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaGulp } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

let initialState = {
  items: [
    {
      title: "HTML",
      img: <AiFillHtml5 color="#D84924" />,
    },
    {
      title: "Css",
      img: <SiCsswizardry color="#0170BC" />,
    },
    {
      title: "Scss",
      img: <SiSass color="#C36192" />,
    },
    {
      title: "React",
      img: <FaReact color="#61dafb" />,
    },
    {
      title: "Next.js",
      img: <SiNextdotjs color="#fff" />,
    },
    {
      title: "Redux | Redux Toolkit",
      img: <SiRedux color="#593d88" />,
    },
    {
      title: "TypeScript",
      img: <SiTypescript color="#3178C6" />,
    },
    {
      title: "Javascript",
      img: <SiJavascript color="#EAD41C" />,
    },
    {
      title: "GraphQL + Apollo",
      img: <GrGraphQl color="#E535AB" />,
    },
    {
      title: "React Testing Library",
      img: <SiTestinglibrary color="#FE0100" />,
    },
    {
      title: "Git | Github",
      img: <FaGithubSquare color="#1A1D21" />,
    },
    {
      title: "Adobe Photoshop",
      img: <SiAdobephotoshop color="#004F86" />,
    },
    {
      title: "Figma",
      img: <FaFigma color="#E64A1C" />,
    },
    {
      title: "Gulp",
      img: <FaGulp color="#C64343" />,
    },
  ],
  skills: [
    { title: "skills.skills1" },
    { title: "skills.skills2" },
    { title: "skills.skills3" },
    { title: "skills.skills4" },
    { title: "skills.skills5" },
    { title: "skills.skills6" },
    { title: "skills.skills7" },
    { title: "skills.skills71" },
    { title: "skills.skills8" },
    { title: "skills.skills9" },
    { title: "skills.skills10" },
  ],
  list: [
    { title: "skills.list1" },
    { title: "skills.list2" },
    { title: "skills.list3" },
    { title: "skills.list4" },
  ],
  plugins: [
    { title: "skills.plugins1" },
    { title: "skills.plugins2" },
    { title: "skills.plugins3" },
    { title: "skills.plugins33" },
    { title: "skills.plugins4" },
    { title: "skills.plugins5" },
    { title: "skills.plugins6" },
    { title: "skills.plugins7" },
    { title: "skills.plugins8" },
    { title: "skills.plugins9" },
    { title: "skills.plugins10" },
    { title: "skills.plugins12" },
    { title: "skills.plugins13" },
  ],
  additional: [
    {
      title: "skills.additional1",
    },
    {
      title: "skills.additional2",
    },
    { title: "skills.additional3" },
  ],
  foreigns: [{ title: "skills.foreign1" }],
};
const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default skillsReducer;
