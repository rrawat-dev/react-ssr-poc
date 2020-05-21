import { fetchNews } from '../../services/news/news.service';

export function fetchNewsSuccessAction(news) {
    return {
        type: 'FETCH_NEWS_SUCCESS',
        payload: news
    };
}

export function fetchNewsAsyncAction() {
    console.log('CALLING XHR');
    return (dispatch) => {
        return fetchNews().then((news) => {
            console.log(`CALLEd XHR ${Object.keys(news)}`);
            dispatch(fetchNewsSuccessAction(news));
        });
    };
}