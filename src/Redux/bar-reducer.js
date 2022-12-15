import { AiFillHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";

const initialState = {
  items: [
    { item: "bar.main", link: "/home", icon: <AiFillHome /> },
    {
      item: "bar.skills",
      link: "/skills",
      icon: <GiSkills />,
    },
    {
      item: "bar.portfolio",
      link: "/portfolio",
      icon: <MdOutlineCollectionsBookmark />,
    },
    {
      item: "bar.contacts",
      link: "/contacts",
      icon: <RiContactsBookLine />,
    },
  ],
};

const barReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default barReducer;
