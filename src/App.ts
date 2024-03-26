import styled from "styled-components";

import BgDesk from './assets/pattern-bg-desktop.png';

export const Container = styled.div`
    min-width: 32rem;
    width: 42rem;
    padding: 0 2.4rem;
    position: relative;
    margin: 0 auto;
   
   .imgBgMobile{
        position: absolute;
        z-index: -1;
        width: 100%;
        left: 0;
    }

    @media(min-width: 760px){
        width: 100%;
        background-image: url('./assets/pattern-bg-desktop.png');

        .imgBgMobile{
            display: none;
        }
    }
`;

export const Search = styled.header`
    text-align: center;
    padding-top: 3rem;

    .inputDiv{
        margin: 3.4rem 0;
        display: flex;
        align-items: center;
        justify-content: center;

        input{
            height: 4.8rem;
            border: none;
            border-radius: 1rem 0 0 1rem;
            width: 100%;
            font-size: 2rem;
            padding-left: 1rem;
            cursor: pointer;
        }

        button{
            height: 4.8rem;
            width: 5.8rem;
            border: none;
            background: black;
            border-radius: 0 1rem 1rem 0;
            cursor: pointer;
        }

        button:hover{
            background: gray;
            transition: .1s;
        }
        
    }

    h1{
        color: #ffff;
        font-size: 2rem;
    }
`;

export const Card = styled.div`
    background: #ffff;
    padding: 2.5rem 2.5rem 1rem;
    text-align: center;
    border-radius: 1rem;

    border: 1px solid red;

    .info{
        margin-bottom: 1.5rem;
    }

    .info span{
        color: #939393;
        font-size: 1.3rem;
        font-weight: 500;
    }

    .info p{
        font-size: 1.8rem;
        font-weight: 500;
    }
   
   @media(min-width: 760px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        height: 16rem;
    }
`;