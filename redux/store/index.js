
import {createStore, applyMiddleware, compose} from 'redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';


// create a makeStore function
const makeStore = context => createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        global.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});