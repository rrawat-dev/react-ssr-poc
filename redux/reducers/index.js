import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper'
import news from './news.reducer';
import fullpageLoader from './fullpageLoader.reducer';

const combinedReducer = combineReducers({
    news,
    fullpageLoader
})


export default (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      }

      return nextState
    } else {
      return combinedReducer(state, action)
    }
  }