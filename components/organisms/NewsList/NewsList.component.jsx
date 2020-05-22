import PropTypes from 'prop-types';
import Loader from '../../atoms/Loader/Loader.component';
import StyledNewsList from './NewsList.style';


export default function NewsList(props) {
    const {news} = props;

    const fetchMoreNews = () => {
        props.fetchNews({
            params: {
                page: props.news.page + 1
            }
        });
    };

    const fetchLatestNews = () => {
        props.fetchNews({
            params: {
                page: 0
            }
        });
    };

    const hideNewsItem = (id) => {
        props.hideNewsItem(id);
    };

    const upvoteNewsItem = (newsitem) => {
        props.upvoteNewsItem(newsitem.objectID, newsitem._upvotes ? newsitem._upvotes + 1 : 1);
    };

    return (
        <StyledNewsList>
            { props.fullpageLoader && <Loader /> }
            <div className="header">
                <ul className="links">
                    <li className="logo-link">
                        <span className="logo"><img src="images/y18.gif" /></span>
                    </li>
                    <li className="link">
                        <a href="#" onClick={fetchLatestNews}>top</a>
                    </li>
                    <li className="link">
                        <a href="#" onClick={fetchLatestNews}>new</a>
                    </li>
                </ul>
            </div>
            <ul className="newsitems">
            {
                news.hits.map(newsItem => (
                        <li className="newsitem" key={newsItem.objectID}>
                            <div className="comments">
                                {newsItem.num_comments || 0}
                            </div>
                            <div className="upvotes">
                                <span className="upvote">{newsItem._upvotes}</span>
                                <span className="icon" onClick={() => upvoteNewsItem(newsItem)}></span>
                            </div>
                            <div className="title">{newsItem.title}</div>
                            <div className="additional-info">
                                { `${newsItem._domain ? '('+newsItem._domain+') ' : ''}by ${newsItem.author} ${newsItem._createdOn} ` }
                                &nbsp;
                                <span className="hide-link" onClick={() => hideNewsItem(newsItem.objectID)}>{" [ hide ] "}</span>
                            </div>
                        </li>
                    )
                )
            }
                <li>
                    <button className="fetch-more-cta" onClick={fetchMoreNews}>Load more</button>
                </li>
            </ul>
        </StyledNewsList>
    );
}

NewsList.propTypes = {
    news: PropTypes.object,
    fetchNews: PropTypes.func.isRequired,
    hideNewsItem: PropTypes.func.isRequired,
    upvoteNewsItem: PropTypes.func.isRequired,
};