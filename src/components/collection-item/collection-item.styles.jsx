import styled from 'styled-components';

import { CustomButtonContainer } from '../custom-button/custom-button.styles';


export const CollectionItemImage = styled.img`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: url(${props => props.imageUrl})
`;

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    ${CustomButtonContainer}{
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
        ${CollectionItemImage} {
          opacity: 0.8;
        }
    
        ${CustomButtonContainer} {
          opacity: 0.85;
          display: flex;
        }
`;


export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const CollectionItemName = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const CollectionItemPrice = styled.span`
    width: 10%;
`;