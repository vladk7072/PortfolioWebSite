const CHANGE_MODE = "main/CHANGE_MODE";
const LANG_MODE = "main/LANG_MODE";

type InitialStateType = {
  modeDark: boolean;
  langMode: boolean;
};

let initialState: InitialStateType = {
  modeDark: true,
  langMode: false,
};

const mainReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case CHANGE_MODE: {
      return {
        ...state,
        modeDark: state.modeDark ? false : true,
      };
    }
    case LANG_MODE: {
      return {
        ...state,
        langMode: state.langMode ? false : true,
      };
    }
    default:
      return state;
  }
};

type SetModeType = {
  type: typeof CHANGE_MODE;
};
type SetLangType = {
  type: typeof LANG_MODE;
};
const setMode = (): SetModeType => ({ type: CHANGE_MODE });
const setLang = (): SetLangType => ({ type: LANG_MODE });

export const changeMode = () => (dispatch: any) => {
  dispatch(setMode());
};
export const changeLgMode = () => (dispatch: any) => {
  dispatch(setLang());
};

export default mainReducer;
