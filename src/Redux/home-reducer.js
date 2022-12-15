import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

let initialState = {
  items: [
    {
      id: 1,
      image: <FaTelegramPlane color="#000" />,
      link: "https://t.me/samuraijs",
    },
    {
      id: 2,
      image: <AiOutlineInstagram color="#000" />,
      link: "https://instagram.com/poveset.t?igshid=YmMyMTA2M2Y=",
    },
    {
      id: 3,
      image: <AiOutlineLinkedin color="#000" />,
      link: "https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4-%D0%BA%D1%80%D0%B0%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-3074a4248/",
    },
  ],
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
