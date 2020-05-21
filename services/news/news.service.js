import httpService from "../http/http.service";

export function fetchNews() {
    return httpService.get('https://hn.algolia.com/api/v1/search').then((res) => {
        return res.data.hits || [];
    });
}