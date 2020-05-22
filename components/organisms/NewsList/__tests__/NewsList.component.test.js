import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import NewsList from '../NewsList.component';

import pageOneData from './mock-data/news-page-1.json';
//import pageTwoData from './mock-data/news-page-2.json';

test('should render all news items', () => {
    const { container } = render(<NewsList
        news={pageOneData}
        fetchNews={()=>{}}
        hideNewsItem={()=>{}}
        upvoteNewsItem={()=>{}}
    />);
    const renderNewsItemCount = container.querySelectorAll('.newsitem').length;
    expect(renderNewsItemCount).toBe(20);
});

test('should render news item correctly', () => {
    const { container } = render(<NewsList
        news={pageOneData}
        fetchNews={()=>{}}
        hideNewsItem={()=>{}}
        upvoteNewsItem={()=>{}}
    />);

    const comments = container.querySelector('.newsitem .comments').textContent;
    const upvotes = container.querySelector('.newsitem .upvote').textContent;
    const title = container.querySelector('.newsitem .title').textContent;
    const additionalInfo = container.querySelector('.newsitem .additional-info').textContent;
    
    expect(comments).toBe('436');
    expect(upvotes).toBe('');
    expect(title).toBe('Stephen Hawking has died');
    expect(additionalInfo.indexOf('by Cogito') > -1).toBe(true);
});

test('should call hideNewsItem prop function on hide cta click', () => {
    const hideNewsItem = jest.fn();
    const { container } = render(<NewsList
        news={pageOneData}
        fetchNews={()=>{}}
        hideNewsItem={hideNewsItem}
        upvoteNewsItem={()=>{}}
    />);

    fireEvent.click(container.querySelector('.newsitem .hide-link'));

    expect(hideNewsItem).toHaveBeenCalledTimes(1);
});


test('should call fetchNews prop function on more cta click', () => {
    const fetchNews = jest.fn();
    const { container } = render(<NewsList
        news={pageOneData}
        fetchNews={fetchNews}
        hideNewsItem={() => {}}
        upvoteNewsItem={()=>{}}
    />);

    fireEvent.click(container.querySelector('.fetch-more-cta'));

    expect(fetchNews).toHaveBeenCalledTimes(1);
});


test('should call upvoteNewsItem prop function on upvote cta click', () => {
    const upvoteNewsItem = jest.fn();
    const { container } = render(<NewsList
        news={pageOneData}
        fetchNews={() => {}}
        hideNewsItem={() => {}}
        upvoteNewsItem={upvoteNewsItem}
    />);

    fireEvent.click(container.querySelector('.upvotes .icon'));

    expect(upvoteNewsItem).toHaveBeenCalledTimes(1);
});