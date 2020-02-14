import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
        MenuItemContainer,
        BackgroundImage,
        ContentContainer,
        Title,
        Subtitle
        }
        from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage imageUrl = {imageUrl}></BackgroundImage>
        <ContentContainer>
            <Title>{ title }</Title>
            <Subtitle>Shop Now</Subtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);