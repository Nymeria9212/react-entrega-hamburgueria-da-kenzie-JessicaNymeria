import styled from "styled-components";

export const ListProducts = styled.ul`
    width: 90%;
    display: flex;
    overflow-x: scroll;
    gap: 2rem;



    @media (min-width:800px){
        flex-direction: row;
        flex-wrap: wrap;
        width: 70%;
        
    }

`