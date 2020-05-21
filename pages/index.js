import {wrapper} from '../redux/store/index';

import HomePage from '../components/pages/HomePage/HomePage.connect';

export const getStaticProps = wrapper.getStaticProps(
    ({store, preview}) => {
        console.log('2. Page.getStaticProps uses the store to dispatch things');
        store.dispatch({type: 'TICK', payload: 'was set in other page ' + preview});
    }
);

export default HomePage;