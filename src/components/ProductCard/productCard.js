import styled from "styled-components";


export const ProductLi = styled.li`
        height: 346px;
        width: 30%;
        min-width: 260px;
        max-width: 260px;
        border: 2px solid var(--grey-scale-20);
        border-radius: var(--radius-2);



        img{
            width: 158px;
        }

        .div-img{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 150px;
            background: var(--grey-scale-0);
        }
        .div-add{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding-left: 1rem;
            padding-top: 1rem;
        }
        h2{
            font-size: var(--title-2);
            font-family: var(--font-family);
            font-weight: var(--weigth-bold-1);
        }
        p{
            font-family: var(--font-family);
        }
        span{font-family: var(--font-family);
        color:var(--color-primary);
        font-weight: var(--weigth-bold-1);
        }
        button{
            background-color: var(--color-primary);
            height: 40px;
            width: 106px;
            border: none;
            border-radius: var(--radius-2);
            color: var(--grey-scale-0);
            cursor: pointer;
        }
`