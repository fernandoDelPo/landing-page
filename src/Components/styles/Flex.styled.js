import styled from  'styled-components';

export const Flex  = styled.div`
    display: flex;
    align-items: start;
 
    & > div,
    & > ul {
        flex: 1;
        
    }
`;

