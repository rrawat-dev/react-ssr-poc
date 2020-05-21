export default function news(news = {}, action) {
    switch(action.type) {
        case 'FETCH_NEWS_SUCCESS':
            console.log(`CALLED ${action.payload}`);
            return {
                ...action.payload,
                hits: (news.hits || []).concat(action.payload.hits)
            };
        case 'FETCH_NEWS_ERROR':
            return {};
        default:
            return news;
    }
}