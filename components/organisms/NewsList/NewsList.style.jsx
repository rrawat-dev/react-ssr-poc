import styled from 'styled-components';
import { COLORS } from '../../../styles/variables';
import { device }  from '../../../styles/device.breakpoints';

export default styled.div`

    .header {
        background-color: ${COLORS.orange};

        .logo {
            border: 2px solid ${COLORS.white};
            width: 18px;
            height: 18px;
            background-image: url('/images/y18.gif');
            background-repeat: no-repeat;
            background-position: center center;
            display: block;

            &-link {
                padding: 4px;                
            }
        }

        .links {
            display: flex;
        }

        .link {
            padding: 5px 8px;
            position: relative;

            &:last-child::before {
                content: ' | ';
                position: absolute;
                left: 0;
                top: 7px;
                font-size: 1rem;
                color: #333;
            }

            a {
                font-size: .9rem;
                color: ${COLORS.white};
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .newsitem {
        display: flex;
        flex-wrap: wrap;
        font-size: .9rem;
        padding: .8rem;
        line-height: 1.2rem;

        &:nth-child(even) {
            background-color: #d8d8d5;
        }

        &:last-child {
            border-bottom: 2px solid ${COLORS.orange};
        }
    }

    .comments {
        width: 2rem;
        text-align: right;
        margin-right: .5rem; 
    }

    .upvotes {
        width: 2rem;
        text-align: right;
        margin-right: .5rem;
        position: relative;
        padding-right: 1rem;
 
        .icon {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;

            &::after {
                content: '';
                display: block;
                width: 0px;
                height: 0px;
                border: 6px solid transparent;
                border-bottom: 6px solid black;
                position: absolute;
                right: 0;
            }
        }
    }

    .title {
        flex-basis: calc(100% - 7rem);

        @media ${device.tablet} {
            flex-basis: auto;
        }
    }

    .additional-info {
        display: flex;
        flex-basis: 100%;
        font-size: .8rem;
        padding: .5rem;
        color: #666;

        @media ${device.tablet} {
            flex-basis: auto;
            padding: 0 .5rem;
        }

        .hide-link {
            float: right;
            color: #333;
            cursor: pointer;

            &:hover {
                color: #000;
            }
        }
    }

    .fetch-more-cta {
        margin: 1rem;
        color: ${COLORS.orange};
        background: none;
        border: none;
        font-size: 1rem;
        cursor: pointer;

        &:focus {
            border: none;
        }
    }
`;