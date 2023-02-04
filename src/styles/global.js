import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body{
    height: 100vh;
}


:root{
    --color-primary:#27AE60;
    --color-primary-50:#93D7AF;
    --color-secundary:#EB5757;
    --gray-scale-100:#333333;
    --grey-scale-50:#828282;
    --grey-scale-20:#E0E0E0;
    --grey-scale-0:#F5F5F5;
     
    --color-negative:#E60000;
    --color-warning:#FFCD07;
    --color-sucess:#168821;
    --color-information:#155BCB;

    --font-family: 'Inter', sans-serif;

    --title-1:1.625rem;
    --title-2:1.375rem;
    --title-3:1.125rem;
    --title-4:0.875rem;
    --text:1rem;

    --weigth-bold-1:700;
    --weigth-bold-2:600;
    --weigth-bold-3:500;
    --weigth-bold-4:400;

    --radius-1:4px;
    --radius-2:6px;
    --radius-3:8px;

}

`


export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;



    @media(min-width:800px){
    flex-direction: row;
    margin: 2rem 2rem 0 2rem;
    align-items: flex-start;
    }

`
export const DivSearch = styled.div`
margin-left: 2.5rem;
`