import {connect} from "react-redux";
import { fetchNewsAsyncAction, hideNewsItemAsyncAction, upvoteNewsItemAsyncAction } from '../../../redux/actions/news.actions';

import NewsList from './NewsList.component';

function mapStateToProps(state) {

    let hiddenNewsItems = [];
    let upvotedNewsItems = {};

    if (global && global.localStorage) {
        hiddenNewsItems = JSON.parse(localStorage.getItem('hiddenNewsItems') || '[]');
        upvotedNewsItems = JSON.parse(localStorage.getItem('upvotedNewsItems') || '{}');
    }

    const upvotedNewsItemsKeys = Object.keys(upvotedNewsItems);

    return {
        fullpageLoader: state.fullpageLoader,
        news: {
            ...state.news,
            hits: state.news.hits.filter((item) => {
                return hiddenNewsItems.indexOf(item.objectID) === -1;
            }).map((item) => {
                if (upvotedNewsItemsKeys.indexOf(item.objectID) > -1) {
                    return {
                        ...item,
                        _upvotes: upvotedNewsItems[item.objectID]._upvotes
                    };
                }

                return item;
            })
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchNews: (options) => dispatch(fetchNewsAsyncAction(options)),
        hideNewsItem: (id) => dispatch(hideNewsItemAsyncAction(id)),
        upvoteNewsItem: (id, upvotes) => dispatch(upvoteNewsItemAsyncAction(id, upvotes)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);