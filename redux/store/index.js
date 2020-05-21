
import {createStore} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import reducer from '../reducers/index';


// create a makeStore function
const makeStore = context => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});