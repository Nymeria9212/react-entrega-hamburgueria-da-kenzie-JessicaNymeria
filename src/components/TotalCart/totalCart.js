import styled from "styled-components";

export const DivTotal = styled.div`
height: 9rem;
display: flex;
flex-direction: column;
justify-content: space-evenly;

background-color: var(--grey-scale-0);

.price, .items{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-family: var(--font-family);
    padding: 0 1rem;
}
h2,p, .btnRemove{
    font-weight: var(--weigth-bold-2);
    color: var(--grey-scale-50);
    font-family: var(--font-family);
}

.btnRemove{
    justify-self: center;
    width: 92%;
    height: 40px;
    color: var(--grey-scale-50);
    border-radius: var(--radius-1);
    border: 2px solid var(--grey-scale-20);
    margin: 0 auto;
    font-size: var(--title-3);

    
}

`