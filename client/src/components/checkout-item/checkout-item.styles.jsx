import styled, { css } from 'styled-components';


const ItemInfosStyles = css`
    width: 23%;
`;


export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const Image = styled.img.attrs(props => ({
    src: props.src,
    alt : props.alt
}))`
    width: 100%;
    height: 100%;
`;

export const NameSpan = styled.span`
    ${ItemInfosStyles}
`;

export const QuantityContainer = styled.span`
    display: flex;
    ${ItemInfosStyles}
`;

export const ArrowDiv = styled.div`
    cursor: pointer;
`;

export const ValueSpan = styled.span`
    margin: 0 10px;
`;

export const PriceSpan = styled.span`
    padding-left: 23px;
    ${ItemInfosStyles}
`;

export const RemoveButton = styled.div`
    padding-left: 23px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
    &::after {
        content: '';
        width: 30px;
        height: 30px;
        background: rgba(212, 212, 212, 0.527);
        border-radius: 50%;
        position: absolute;
        z-index: -1;
    }
    }
`;