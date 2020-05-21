import StyledNewsList from './NewsList.style';

export default function NewsList(props) {
    const {news} = props;

    const fetchMoreNews = () => {
        props.fetchNews({page: props.page + 1});
    };

    return (
        <StyledNewsList>
            <div className="header">
                <ul className="links">
                    <li className="link">
                        top
                    </li>
                    <li className="link">
                        new
                    </li>
                </ul>
            </div>
            <ul className="newsitems">
            {
                news.hits.map(newsItem => (
                        <li className="newsitem">
                            <div className="comments">
                                {newsItem.num_comments}
                            </div>
                            <div className="upvotes">
                                {newsItem.num_comments}
                            </div>
                            <div className="title">
                                {newsItem.title}
                            </div>
                            <div className="additional-info">
                                (<b>apple.com</b>) by <span className="author">test</span> 3 hours ago
                                [<a href="Hide">hide</a>]
                            </div>
                        </li>
                    )
                )
            }
            <li className="fetch-more-news">
                <a href="#" onClick={fetchMoreNews}>More</a>
            </li>
            </ul>
        </StyledNewsList>
    );
}