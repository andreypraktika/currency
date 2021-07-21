import { createStore } from 'redux';

const store = createStore(dateReducer);

function dateReducer(state = {
    start: new Date(),
    end: new Date()
}, action) {
    switch (action.type) {
      case 'start':
        return {...state, start: action.start}
      case 'end':
        return {...state, end: action.end}
      default:
        return state
    }
  }

export default store;