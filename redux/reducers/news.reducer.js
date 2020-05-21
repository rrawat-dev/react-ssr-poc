export default function news(news = [], action) {
    switch(action.type) {
        case 'FETCH_NEWS_SUCCESS':
            console.log(`CALLED ${action.payload}`);
            return news.concat(action.payload);
        case 'FETCH_NEWS_ERROR':
            return news.concat(action.payload);
        default:
            return news;
    }
}