import axios from "axios";

const routePath = '/api/users';

// INITIAL STATE
const initialState = {};

// ACTION TYPES
const GOT_DATA = "GOT_DATA";

// ACTION CREATORS
const gotData = (data) => {
  return {
    type: GOT_DATA,
    data,
  };
};

// THUNK CREATORS

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${routePath}`);
      dispatch(gotData(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const subreducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_DATA:
       return { ...state, allData: action.data };
  default:
    return state;
  }
};
export default subreducer;
