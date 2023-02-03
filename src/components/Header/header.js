import styled from "styled-components";
import { GlobalStyles } from "../../styles/global";


export const HeaderPage = styled.header`

    height: 139px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
   background-color: var(--grey-scale-0);

  .search{
    display: flex;
    height: 50px;
    background-color: white;
    align-items: center;
    width: 85%;
    justify-content: space-around;
    border: solid 2px var(--grey-scale-20);
    border-radius: var(--radius-2);
   }

   button{
    background-color: var(--color-primary);
    height: 40px;
    width: 107px;
    border-radius: var(--radius-3);
    border: none;
    cursor: pointer;
    color: var(--grey-scale-0);

   }
   input{
    height: 35px;
    border: none;
   }
    




    @media(min-width:660px){
        flex-direction: row;
       justify-content: space-between;
        padding: 0 5rem;
        align-items: center; 
        height: 80px;


        .search{
            max-width: 325px;
        }
    }
`
export const Main = styled.main`
`