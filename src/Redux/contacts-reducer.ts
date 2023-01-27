import { mailApi } from "../api/api";

const POST_SUCCESS = "contacts/POST_SUCCESS";

type ItemType = {
  id: number;
  title: string;
  text: string;
  link?: string;
};

let initialState = {
  items: [
    { id: 1, title: "contacts.title1", text: "contacts.text1" },
    {
      id: 2,
      title: "contacts.title2",
      text: "contacts.text2",
      link: "mailto:vladk7072@gmail.com",
    },
    {
      id: 3,
      title: "contacts.title3",
      text: "contacts.text3",
      link: "tel:0970163619",
    },
  ] as Array<ItemType>,
  postSuccess: null as boolean | null,
};

type InitialStateType = typeof initialState;
type ActionsType = PostSuccessType;

const contactsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case POST_SUCCESS: {
      return {
        ...state,
        postSuccess: action.boolean,
      };
    }
    default:
      return state;
  }
};

type PostSuccessType = {
  type: typeof POST_SUCCESS
  boolean: boolean
}
const postSuccess = (boolean: boolean):PostSuccessType => ({ type: POST_SUCCESS, boolean });

export const sendForm =
  (token: string, chatId: string, parseMode: string, text: string) => async (dispatch: any) => {
    let response = await mailApi.postMail(token, chatId, parseMode, text);
    if (response.data.ok) {
      dispatch(postSuccess(true));
    } else if (!response.data.ok) {
      dispatch(postSuccess(false));
    }
  };

export default contactsReducer;
