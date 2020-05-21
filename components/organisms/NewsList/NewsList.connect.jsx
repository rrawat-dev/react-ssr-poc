import {connect} from "react-redux";
import { fetchNewsAsyncAction } from '../../../redux/actions/news.actions';

import NewsList from './NewsList.component';

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchNews: (options) => dispatch(fetchNewsAsyncAction(options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);