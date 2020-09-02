const titles = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TITLES':
      return action.titles;

    default:
      return state;
  }
};

export default titles;
