import httpService from "../http/http.service";

export function fetchNews(options) {
    return httpService.get('https://hn.algolia.com/api/v1/search', (options || {})).then((res) => {
        return {
            ...res.data,
            hits: (res.data.hits || []).filter(item => !!(item.title))
        };
    });
}
