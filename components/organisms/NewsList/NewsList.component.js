import Head from 'next/head'
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
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="News Feeds that gratifies one's intellectual curiosity."/>
            </Head>
            { props.fullpageLoader && <Loader /> }
            <div className="header">
                <ul className="links">
                    <li className="logo-link">
                        <span className="logo"><img src="images/y18.gif" alt="Site Logo" /></span>
                    </li>
                    <li className="link">
                        <button onClick={fetchLatestNews}>top</button>
                    </li>
                    <li className="link">
                        <button onClick={fetchLatestNews}>new</button>
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
                                <button className="icon" onClick={() => upvoteNewsItem(newsItem)}>upvote</button>
                            </div>
                            <div className="title">{newsItem.title}</div>
                            <div className="additional-info">
                                { `${newsItem._domain ? '('+newsItem._domain+') ' : ''}by ${newsItem.author} ${newsItem._createdOn} ` }
                                &nbsp;
                                <button className="hide-link" onClick={() => hideNewsItem(newsItem.objectID)}>{" [ hide ] "}</button>
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