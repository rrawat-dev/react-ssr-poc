import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';

export default styled.div`
    .header {
        background-color: ${COLORS.orange};

        .links {
            display: flex;
        }

        .link {
            padding: 5px 5px;
        }
    }

    .newsitem {
        display: flex;
        font-size: .9rem;
        padding: 5px;

        &:nth-child(even) {
            background-color: #d8d8d5;
        }
    }

    .comments {
        width: 3rem;
        text-align: right;
        margin-right: 1rem; 
    }

    .upvotes {
        width: 3rem;
        text-align: right;
        margin-right: 1rem;
    }

    .additional-info {
        font-size: .8rem;
        padding: 0 .5rem;
        color: #666;
        flex-basis: 100%;
    }

    .fetch-more-news {
        color: ${COLORS.orange};
        margin-left: 8.5rem;
    }
`;