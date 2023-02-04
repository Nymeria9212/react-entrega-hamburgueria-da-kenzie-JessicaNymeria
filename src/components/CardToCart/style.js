import styled from "styled-components";

export const CardCart = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-family);
    padding: 0 0.75rem;
img{
    width: 5rem;
    background-color: var(--grey-scale-20);
    border-radius: var(--radius-2);
}
h3{
    font-weight: var(--weigth-bold-2);
    font-size: var(--title-3);
}
p{
    font-size: var(--text-2);
}
.product{
    display: flex;
    align-items: center;
}
.product>div{
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-left: 0.35rem;
}
.btn-card-Cart{
    display: flex;
    gap: 5px;
   
}
button{
    border: none;
    cursor: pointer;
    font-family: var(--font-family);
    color: var(--grey-scale-50);
    font-weight: var(--weigth-bold-2);
    background-color: var(--grey-scale-20);
}
`