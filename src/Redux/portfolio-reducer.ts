// @ts-ignore
import img00 from "./../assets/images/portfolio00.jpg";
// @ts-ignore
import img0 from "./../assets/images/portfolio0.jpg";
// @ts-ignore
import img1 from "./../assets/images/portfolio1.jpg";
// @ts-ignore
import img2 from "./../assets/images/portfolio2.jpg";
// @ts-ignore
import img3 from "./../assets/images/portfolio3.jpg";
// @ts-ignore
import img4 from "./../assets/images/portfolio4.jpg";
// @ts-ignore
import img5 from "./../assets/images/portfolio5.jpg";
// @ts-ignore
import img6 from "./../assets/images/portfolio6.jpg";
// @ts-ignore
import img7 from "./../assets/images/portfolio7.jpg";
// @ts-ignore
import img8 from "./../assets/images/portfolio8.jpg";
// @ts-ignore
import img9 from "./../assets/images/portfolio9.jpg";

const IS_OPEN = "portfolio/IS_OPEN";
const IS_CLOSE = "portfolio/IS_CLOSE";

type Itemtype = {
  id: number;
  title: string;
  img: string;
  hasRealLink?: string;
  links?: Array<string>;
  isOpen: boolean;
};

let initialState = {
  items: [
    {
      id: 0,
      title: "portfolio.title0",
      img: img0,
      hasRealLink: "https://todo-board-vladk7072.vercel.app/",
      isOpen: false,
    },
    {
      id: 1,
      title: "portfolio.title2",
      img: img2,
      links: [
        "https://vladk7072.github.io/DaiLapy-dist/",
        "https://vladk7072.github.io/DaiLapy-dist/all.html",
        "https://vladk7072.github.io/DaiLapy-dist/card.html",
        "https://vladk7072.github.io/DaiLapy-dist/help.html",
        "https://vladk7072.github.io/DaiLapy-dist/useful.html",
      ],
      isOpen: false,
    },
    {
      id: 2,
      title: "portfolio.title1",
      img: img1,
      links: [
        "https://vladk7072.github.io/AlfaSf-dist/",
        "https://vladk7072.github.io/AlfaSf-dist/basics.html",
        "https://vladk7072.github.io/AlfaSf-dist/calls.html",
        "https://vladk7072.github.io/AlfaSf-dist/cart.html",
        "https://vladk7072.github.io/AlfaSf-dist/catalog.html",
        "https://vladk7072.github.io/AlfaSf-dist/choice.html",
        "https://vladk7072.github.io/AlfaSf-dist/choose.html",
        "https://vladk7072.github.io/AlfaSf-dist/gallery.html",
        "https://vladk7072.github.io/AlfaSf-dist/hole.html",
        "https://vladk7072.github.io/AlfaSf-dist/miscalculation.html",
        "https://vladk7072.github.io/AlfaSf-dist/popular.html",
        "https://vladk7072.github.io/AlfaSf-dist/que-and-ans.html",
      ],
      hasRealLink: "https://alfa-sv.kiev.ua/ua/",
      isOpen: false,
    },
    {
      id: 3,
      title: "portfolio.title3",
      img: img3,
      links: [
        "https://vladk7072.github.io/pokermatch-dist/",
        "https://vladk7072.github.io/pokermatch-dist/secondPage.html",
        "https://vladk7072.github.io/pokermatch-dist/thirdPage.html",
        "https://vladk7072.github.io/pokermatch-dist/casinoappspokermatch.html",
        "https://vladk7072.github.io/pokermatch-dist/casinoslots.html",
        "https://vladk7072.github.io/pokermatch-dist/depositwithdrawal.html",
        "https://vladk7072.github.io/pokermatch-dist/depositwithdrawal2.html",
        "https://vladk7072.github.io/pokermatch-dist/depositwithdrawal3.html",
        "https://vladk7072.github.io/pokermatch-dist/downloadpokermatchapp.html",
        "https://vladk7072.github.io/pokermatch-dist/howtoplay.html",
        "https://vladk7072.github.io/pokermatch-dist/howtoplaypokermatch.html",
        "https://vladk7072.github.io/pokermatch-dist/howtoregister2.html",
        "https://vladk7072.github.io/pokermatch-dist/howtoregistered.html",
        "https://vladk7072.github.io/pokermatch-dist/livecasino.html",
        "https://vladk7072.github.io/pokermatch-dist/livecasino2.html",
        "https://vladk7072.github.io/pokermatch-dist/livecasinonline.html",
        "https://vladk7072.github.io/pokermatch-dist/livecasinopokermatchindia.html",
        "https://vladk7072.github.io/pokermatch-dist/mobileappspokermatch.html",
        "https://vladk7072.github.io/pokermatch-dist/onlinecasinopokermatchindia.html",
        "https://vladk7072.github.io/pokermatch-dist/pokermatchcasino.html",
        "https://vladk7072.github.io/pokermatch-dist/pokermatchcasinoslots.html",
        "https://vladk7072.github.io/pokermatch-dist/pokermatchslots.html",
        "https://vladk7072.github.io/pokermatch-dist/signupforpokermatch.html",
      ],
      hasRealLink: "https://governmentjobseeker.com/",
      isOpen: false,
    },
    {
      id: 4,
      title: "portfolio.title4",
      img: img4,
      links: [
        "https://vladk7072.github.io/montach-dist/",
        "https://vladk7072.github.io/montach-dist/single.html",
        "https://vladk7072.github.io/montach-dist/popup-1.html",
        "https://vladk7072.github.io/montach-dist/popup-2.html",
        "https://vladk7072.github.io/montach-dist/news.html",
        "https://vladk7072.github.io/montach-dist/contacts.html",
        "https://vladk7072.github.io/montach-dist/category.html",
        "https://vladk7072.github.io/montach-dist/about.html",
        "https://vladk7072.github.io/montach-dist/subcategory.html",
      ],
      isOpen: false,
    },
    {
      id: 5,
      title: "portfolio.title5",
      img: img5,
      links: [
        "https://vladk7072.github.io/bbd-dist/",
        "https://vladk7072.github.io/bbd-dist/about-city.html",
        "https://vladk7072.github.io/bbd-dist/about-us.html",
        "https://vladk7072.github.io/bbd-dist/contact.html",
        "https://vladk7072.github.io/bbd-dist/donation.html",
        "https://vladk7072.github.io/bbd-dist/events.html",
        "https://vladk7072.github.io/bbd-dist/future-events.html",
        "https://vladk7072.github.io/bbd-dist/live-streams.html",
        "https://vladk7072.github.io/bbd-dist/past-broadcasts.html",
        "https://vladk7072.github.io/bbd-dist/past-events.html",
        "https://vladk7072.github.io/bbd-dist/podcasts-media.html",
        "https://vladk7072.github.io/bbd-dist/podcasts.html",
        "https://vladk7072.github.io/bbd-dist/policy.html",
        "https://vladk7072.github.io/bbd-dist/post.html",
        "https://vladk7072.github.io/bbd-dist/projects.html",
        "https://vladk7072.github.io/bbd-dist/search-results.html",
        "https://vladk7072.github.io/bbd-dist/404.html",
      ],
      hasRealLink: "https://pasha-janx.pp.ua/fr/",
      isOpen: false,
    },
    {
      id: 6,
      title: "portfolio.title6",
      img: img6,
      links: ["https://vladk7072.github.io/depsparking/"],
      hasRealLink: "https://parking.deps.ua/",
      isOpen: false,
    },
    {
      id: 7,
      title: "portfolio.title7",
      img: img7,
      links: [
        "https://vladk7072.github.io/CarBulbs-dist/",
        "https://vladk7072.github.io/CarBulbs-dist/blog.html",
        "https://vladk7072.github.io/CarBulbs-dist/bulbs.html",
        "https://vladk7072.github.io/CarBulbs-dist/clean.html",
        "https://vladk7072.github.io/CarBulbs-dist/f150.html",
        "https://vladk7072.github.io/CarBulbs-dist/foglights.html",
        "https://vladk7072.github.io/CarBulbs-dist/h7.html",
        "https://vladk7072.github.io/CarBulbs-dist/homepage.html",
        "https://vladk7072.github.io/CarBulbs-dist/lights.html",
        "https://vladk7072.github.io/CarBulbs-dist/makes.html",
      ],
      isOpen: false,
    },
    {
      id: 8,
      title: "portfolio.title8",
      img: img8,
      links: [
        "https://vladk7072.github.io/b-elvita",
        "https://vladk7072.github.io/b-elvita/feedback.html",
        "https://vladk7072.github.io/b-elvita/product.html",
        "https://vladk7072.github.io/b-elvita/question.html",
        "https://vladk7072.github.io/b-elvita/result.html",
        "https://vladk7072.github.io/b-elvita/test.html",
      ],
      isOpen: false,
    },
    {
      id: 9,
      title: "portfolio.title9",
      img: img9,
      links: [
        "https://vladk7072.github.io/drohobych-city-hospital",
        "https://vladk7072.github.io/drohobych-city-hospital/about.html",
        "https://vladk7072.github.io/drohobych-city-hospital/direction.html",
        "https://vladk7072.github.io/drohobych-city-hospital/doctors.html",
        "https://vladk7072.github.io/drohobych-city-hospital/portfolio.html",
        "https://vladk7072.github.io/drohobych-city-hospital/research.html",
        "https://vladk7072.github.io/drohobych-city-hospital/tidings.html",
      ],
      isOpen: false,
    },
  ] as Array<Itemtype>,
};

type InitialStateType = typeof initialState;
type ActionsType = OpenListType | CloseListType;

const portfolioReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case IS_OPEN: {
      return {
        ...state,
        items: state.items.map((item) =>
          action.itemId === item.id ? { ...item, isOpen: true } : item
        ),
      };
    }
    case IS_CLOSE: {
      return {
        ...state,
        items: state.items.map((item) =>
          action.itemId === item.id ? { ...item, isOpen: false } : item
        ),
      };
    }
    default:
      return state;
  }
};

type OpenListType = {
  type: typeof IS_OPEN;
  itemId: number;
};
type CloseListType = {
  type: typeof IS_CLOSE;
  itemId: number;
};
const openList = (itemId: number): OpenListType => ({ type: IS_OPEN, itemId });
const closeList = (itemId: number): CloseListType => ({
  type: IS_CLOSE,
  itemId,
});

export const setOpenList = (itemId: number) => (dispatch: any) => {
  dispatch(openList(itemId));
};
export const setCloseList = (itemId: number) => (dispatch: any) => {
  dispatch(closeList(itemId));
};

export default portfolioReducer;
