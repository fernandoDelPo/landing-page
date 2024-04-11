import styled  from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0,  0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({layaout}) => layaout || 'row'};

    img {
        width: 80%;
        margin-left: 40px;
        margin-right: 40px;
    }

    & >  div{
        flex: 1;
    }
`;