import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const CollectionTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover{
        color: grey;
        background-color: rgba(0, 0, 0, 0.02)
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;