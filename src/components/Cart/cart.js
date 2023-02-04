import styled from "styled-components";


export const AsydeCart = styled.aside`
width: 90%;
height: 500px;

ul{
    overflow-y: auto;
    height: 300px;
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
    

`


