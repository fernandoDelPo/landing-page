import styled from  'styled-components';

export const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        list-style: none;
    }

    a {
        color: #fff;
        border: 1px solid #fff;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 8px;
        height: 40px;
        width: 40px;
        transition: all .3s ease;
        text-decoration: none;
        
        &:hover{
            color: #0959ee80; 
            border-color: #0959ee80;
        }
    }
`