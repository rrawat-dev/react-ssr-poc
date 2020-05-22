import {fetchNews} from '../../services/news/news.service';

export default function(req, res) {
    const params = {
        params: req.query || {}
    };

    fetchNews(params).then((data) => {
        res.send(JSON.stringify(data));
    });
};