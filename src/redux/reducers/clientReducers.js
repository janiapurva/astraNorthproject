const intialState = [
  {
    id: 0,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    gender: "male",
    dateOfBirth: "1990-12-25",
    profilePicture: null,
    address: "1234 awe drive",
    city: "Montreal",
    state: "qc",
    postalCode: "M1G3E",
    country: "Canada",
  },
  {
    id: 1,
    firstName: "Json",
    lastName: "Morera",
    email: "json.morea@gmail.com",
    gender: "male",
    dateOfBirth: "1990-12-25",
    profilePicture: null,
    address: "xyz awe drive",
    city: "Toronto",
    state: "On",
    postalCode: "N1G3E",
    country: "Canada",
  },
];

const clientReducer = (state = intialState, action) => {
  switch (action.type) {
    case "UPDATE_CONTACT":
      const updateState = state.map((client) =>
        client.id === action.payload.id ? action.payload : client
      );
      state = updateState;
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default clientReducer;
