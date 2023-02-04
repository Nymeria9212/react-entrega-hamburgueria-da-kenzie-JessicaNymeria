import styled from "styled-components";


export const AsydeCart = styled.aside`
width: 90%;
height: 900px;

ul{
    overflow-y: auto;
    height: 300px;
    background-color: var(--grey-scale-0);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top:0.5rem;
    border-bottom: 2px solid var(--grey-scale-20);
}
.cartOff{
    width: -webkit-fill-available;
}



@media(min-width:600px){
   width:30%;
   min-width: 400px;
    max-width: 400px;
  
}

`


export const CartStyle = styled.div`
    
    height: 60px;
    color: white;
    background: green;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    border-radius: 6px 6px 0 0;
    font-family: var(--font-family);
    font-weight: var(--weigth-bold-2);
    

`


