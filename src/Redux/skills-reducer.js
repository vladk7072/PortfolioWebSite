import { FaReact } from "react-icons/fa";
import { SiJest, SiRedux, SiTestinglibrary } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaGulp } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

let initialState = {
  items: [
    {
      title: "HTML",
      text: "skills.items5",
      img: <AiFillHtml5 color="#D84924" />,
    },
    {
      title: "Css",
      text: "skills.items6",
      img: <SiCsswizardry color="#0170BC" />,
    },
    {
      title: "Scss",
      text: "skills.items7",
      img: <SiSass color="#C36192" />,
    },
    {
      title: "React",
      text: "skills.items1",
      img: <FaReact color="#61dafb" />,
    },
    {
      title: "Redux | Redux Toolkit",
      text: "skills.items2",
      img: <SiRedux color="#593d88" />,
    },
    {
      title: "TypeScript",
      text: "skills.items3",
      img: <SiTypescript color="#3178C6" />,
    },
    {
      title: "Javascript",
      text: "skills.items4",
      img: <SiJavascript color="#EAD41C" />,
    },
    {
      title: "Jest",
      text: "skills.items71",
      img: <SiJest color="#E43906" />,
    },
    {
      title: "React Testing Library",
      text: "skills.items72",
      img: <SiTestinglibrary color="#FE0100" />,
    },
    {
      title: "Git | Github",
      text: "skills.items8",
      img: <FaGithubSquare color="#1A1D21" />,
    },
    {
      title: "Adobe Photoshop",
      text: "skills.items9",
      img: <SiAdobephotoshop color="#004F86" />,
    },
    {
      title: "Figma",
      text: "skills.items10",
      img: <FaFigma color="#E64A1C" />,
    },
    {
      title: "Gulp",
      text: "skills.items11",
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
    { title: "skills.list5" },
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
