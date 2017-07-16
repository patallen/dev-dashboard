const initialState = { name: "" };

const organizationReducer = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }

  let newState = {};
  switch (action.type) {
    case "SET_ORGANIZATION":
      newState = action.payload;
      break;
  }
  return newState;
};

export default organizationReducer;
