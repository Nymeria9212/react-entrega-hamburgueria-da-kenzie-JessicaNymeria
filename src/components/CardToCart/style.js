import styled from "styled-components";

export const CardCart = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-family);
img{
    width: 5rem;
}
.product{
    display: flex;
    align-items: center;
}
.btn-card-Cart{
    display: flex;
    gap: 5px;
   
}
button{
    border: none;
    cursor: pointer;
    font-family: var(--font-family);
}
`