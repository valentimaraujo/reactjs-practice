import { createStore } from 'redux';

const INICIAL_STATE = {
  data: [
    'React Native',
    'ReactJS',
    'PHP',
    'Data Science',
  ]
};

function courses (state = INICIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title] };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;
