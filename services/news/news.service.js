import httpService from "../http/http.service";

function getCreatedOnText(date) {
    const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
    const diff = ((new Date().getTime()) - date.getTime()) / MILLISECONDS_IN_A_DAY;

    if (diff < 7) {
        return `${diff} day ago`; 
    } else if (diff < 28) {
        return `${Math.floor(diff / 7)} week ago`; 
    } else if (diff < 365) {
        return `${Math.floor(diff / 30)} month ago`; 
    } else {
        return `${Math.floor(diff / 365)} year ago`; 
    }
}

function getDomain(url) {
    return url.replace(/https?:\/\/(www\.)?/, '').split('/')[0];
}

export function fetchNews(options) {
    const url = global && global.localStorage ? '/api/news' : 'https://hn.algolia.com/api/v1/search';
    return httpService.get(url, (options || {})).then((res) => {
        return {
            ...res.data,
            hits: (res.data.hits || [])
                .filter(item => !!(item.title))
                .map(item => {
                    return {
                        ...item,
                        _createdOn: getCreatedOnText(new Date(item.created_at)),
                        _domain: getDomain(item.url || ''),
                        _upvotes: 0
                    };
                })
        };
    });
}


export function hideNewsItem(id) {
    return new Promise((resolve, reject) => {
        if (global && global.localStorage) {
            let hiddenNewsItems = JSON.parse(global.localStorage.getItem('hiddenNewsItems') || '[]');
            hiddenNewsItems = hiddenNewsItems.filter(item => item !== id).concat(id);
            global.localStorage.setItem('hiddenNewsItems', JSON.stringify(hiddenNewsItems));
            
            setTimeout(() => {
                resolve();
            }, 1000);
        } else {
            reject();
        }
    });
}

export function upvoteNewsItem(id, upvotes) {
    return new Promise((resolve, reject) => {
        if (global && global.localStorage) {
            let upvotedNewsItems = JSON.parse(global.localStorage.getItem('upvotedNewsItems') || '{}');
            upvotedNewsItems[id] = {
                _upvotes: upvotes
            };

            global.localStorage.setItem('upvotedNewsItems', JSON.stringify(upvotedNewsItems));
            
            setTimeout(() => {
                resolve();
            }, 1000);
        } else {
            reject();
        }
    });
}