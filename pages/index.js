import {wrapper} from '../redux/store/index';
import { fetchNewsAsyncAction } from '../redux/actions/news.actions';
import HomePage from '../components/pages/HomePage/HomePage.connect';

export const getStaticProps = wrapper.getServerSideProps(
    ({store}) => {
        //console.log('2. Page.getStaticProps uses the store to dispatch things');
        return store.dispatch(fetchNewsAsyncAction());
    }
);

export default HomePage;