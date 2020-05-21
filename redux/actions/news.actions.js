import { fetchNews, hideNewsItem, upvoteNewsItem } from '../../services/news/news.service';

export function showFullPageLoaderAction(showFullPageLoader) {
    return {
        type: 'SHOW_FULLPAGE_LOADER',
        payload: showFullPageLoader
    };
}

export function fetchNewsSuccessAction(news) {
    return {
        type: 'FETCH_NEWS_SUCCESS',
        payload: news
    };
}

export function fetchLatestNewsSuccessAction(news) {
    return {
        type: 'FETCH_LATEST_NEWS_SUCCESS',
        payload: news
    };
}

export function hideNewsItemSuccessAction(id) {
    return {
        type: 'HIDE_NEWS_ITEM',
        payload: id
    };
}

export function upvoteNewsItemSuccessAction(id, upvotes) {
    return {
        type: 'UPVOTE_NEWS_ITEM',
        payload: {
            id,
            upvotes
        }
    };
}

export function fetchNewsAsyncAction(options) {
    return (dispatch) => {
        dispatch(showFullPageLoaderAction(true));
        return fetchNews(options).then((news) => {
            if (options && options.page === 0) {
                dispatch(fetchLatestNewsSuccessAction(news));
            } else {
                dispatch(fetchNewsSuccessAction(news));
            }

            dispatch(showFullPageLoaderAction(false));
        }).catch((err) => {
            dispatch(showFullPageLoaderAction(false));
        });
    };
}

export function hideNewsItemAsyncAction(id) {
    return (dispatch) => {
        dispatch(showFullPageLoaderAction(true));
        return hideNewsItem(id).then(() => {
            dispatch(hideNewsItemSuccessAction(id));
            dispatch(showFullPageLoaderAction(false));
        }).catch((err) => {
            dispatch(showFullPageLoaderAction(false));
        });
    };
}


export function upvoteNewsItemAsyncAction(id, upvotes) {
    return (dispatch) => {
        dispatch(showFullPageLoaderAction(true));
    
        return upvoteNewsItem(id, upvotes).then(() => {
            dispatch(upvoteNewsItemSuccessAction(id, upvotes));
            dispatch(showFullPageLoaderAction(false));
        }).catch((err) => {
            dispatch(showFullPageLoaderAction(false));
        });
    };
}
